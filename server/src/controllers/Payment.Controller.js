import stripe from "stripe";
import { User } from "../models/User.Model.js";
import mongoose from "mongoose";

const Stripe = stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function plans(req, res) {
  try {
    const plans = await Stripe.prices.list({ active: true });
    if (plans.data.length === 0) {
      return res.status(404).json({
        message: "Sorry, no plans currently available.",
        success: false,
      });
    }

    // Convert unit amounts from cents to dollars and format the price
    const formattedPlans = plans.data.map((plan) => ({
      ...plan,
      unit_amount: (plan.unit_amount / 100).toFixed(2),
      currency: plan.currency.toUpperCase(),
    }));

    return res.status(200).json({
      message: "Successful",
      plans: formattedPlans,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      issue: error.message,
      success: false,
    });
  }
}

async function createStripeCheckOutSession(planName, planID, cusID, userDbID) {
  userDbID = userDbID.toString();
  let successURI = "http://localhost:8000/api/payment/success";
  let failURI = "http://localhost:8000/api/payment/fail";
  if (planName === "TRIAL") {
    return await Stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: planID, quantity: 1 }],
      subscription_data: {
        trial_period_days: 7,
      },
      customer: cusID, // help to don't create dublicate customer
      metadata: {
        _id: userDbID,
        customer: cusID,
        planType: planName,
      },
      success_url: successURI,
      cancel_url: failURI,
    });
  } else {
    return await Stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: planID, quantity: 1 }],
      customer: cusID,
      metadata: {
        _id: userDbID,
        customer: cusID,
        planType: planName,
      },
      success_url: successURI,
      cancel_url: failURI,
    });
  }
}

export async function createCheckoutSession(req, res) {
  const { _id, planType, planID } = req.body;

  // Validation
  if (
    typeof _id === "undefined" ||
    typeof planType === "undefined" ||
    typeof planID === "undefined" ||
    _id.trim() === "" ||
    planType.trim() === "" ||
    planID.trim() === ""
  ) {
    return res.status(400).json({
      message: "Please provide all the fields.",
      required: "[ _id, planType, planID ]",
      success: false,
    });
  }

  if (!["BASIC", "TRIAL", "STANDARD", "PREMIUM"].includes(planType)) {
    return res.status(400).json({
      message: "Invalid parameter planType.",
      required: "[ planType: [ BASIC, TRIAL, STANDARD, PREMIUM ] ]",
      success: false,
    });
  }

  try {
    // Check user existence
    const isUserExist = await User.findById(_id);
    if (!isUserExist) {
      return res.status(404).json({
        message: "No user exists.",
        success: false,
      });
    }

    // Check if user has already availed trial plan
    if (isUserExist.isTrialPlanTaken && planType === "TRIAL") {
      return res.status(400).json({
        message: "Sorry! You have already taken your trial plan.",
        success: false,
      });
    }

    // Retrieve plan from Stripe
    const plan = await Stripe.prices.retrieve(planID);
    if (!plan) {
      return res.status(404).json({
        message: "Plan not found on Stripe.",
        success: false,
      });
    }

    // Find or create a customer on Stripe
    let customer = await Stripe.customers.list({ email: isUserExist.email });
    if (customer.data.length === 0) {
      customer = await Stripe.customers.create({ email: isUserExist.email });
      isUserExist.stripeCusId = customer.id;
      await isUserExist.save();
    } else {
      customer = customer.data[0];
    }

    const subscriptions = await Stripe.subscriptions.list({
      customer: customer.id,
      status: "active",
    });

    console.log(subscriptions);

    if (
      subscriptions.data.length > 0 &&
      ["BASIC", "TRIAL", "STANDARD", "PREMIUM"].includes(isUserExist.plan)
    ) {
      return res.status(400).json({
        message: `You have already one active  ${isUserExist.plan} subscription.`,
        success: false,
      });
    }

    let session = await createStripeCheckOutSession(
      planType,
      plan.id,
      customer.id,
      isUserExist._id
    );

    res.status(200).json({
      message: "Checkout session created successfully.",
      successUrl: session.url,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
      issue: error.message,
    });
  }
}

export async function cancleSubscription(req, res) {
  const { _id } = req.query;
  if (typeof _id === "undefined" || _id.trim() === "") {
    return res.status(400).json({
      message: "All fields are required.",
      required: "[ _id ]",
      success: false,
    });
  }

  try {
    const isUserExist = await User.findById(_id);
    if (!isUserExist) {
      return res.status(400).json({
        message: "No such user exist.",
        success: false,
      });
    }

    if (isUserExist.plan === "NONE") {
      return res.status(400).json({
        message: "You don't have any active plan.",
        success: false,
      });
    }

    const subscriptions = await Stripe.subscriptions.list({
      customer: isUserExist.stripeCusId,
      status: "active",
    });

    if (subscriptions.data.length < 0) {
      return res.status(400).json({
        message: `You have no active subscription.`,
        success: false,
      });
    }

    const isDeleteSuccess = await Stripe.subscriptions.cancel(
      subscriptions.data[0].id
    );
    if (isDeleteSuccess.status === "canceled") {
      isUserExist.plan = "NONE";
      await isUserExist.save();

      return res.status(200).json({
        message: "Subscription successfully cancled.",
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      issue: error.message,
      success: false,
    });
  }
}

export async function oneTimePayment(req, res) {
  const { _id, planID } = req.body;
  console.log(req.body);
  if (
    typeof _id === "undefined" ||
    typeof planID === "undefined" ||
    planID.trim() === "" ||
    _id.trim() === ""
  ) {
    return res.status(400).json({
      message: "All fields are required.",
      required: "[ _id ]",
      success: false,
    });
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({
      message: "Provide valid mongoose _id.",
      required: "[ _id ]",
      success: false,
    });
  }

  try {
    // ensure user exist or not
    const isUserExist = await User.findById(_id);
    if (!isUserExist) {
      return res.status(404).json({
        message: "No user found.",
        success: false,
      });
    }

    // Retrieve plan from Stripe
    const plan = await Stripe.prices.retrieve(planID);
    if (!plan) {
      return res.status(404).json({
        message: "Plan not found on Stripe.",
        success: false,
      });
    }

    if (plan.type !== "one_time") {
      return res.status(400).json({
        message: "Invalid PlanID.",
        required: "[ planID ]",
        success: false,
      });
    }

    // Find or create a customer on Stripe
    let customer = await Stripe.customers.list({ email: isUserExist.email });
    if (customer.data.length === 0) {
      customer = await Stripe.customers.create({ email: isUserExist.email });
      isUserExist.stripeCusId = customer.id;
      await isUserExist.save();
    } else {
      customer = customer.data[0];
    }

    const checkoutSession = await Stripe.checkout.sessions.create({
      mode: "payment", // for one-time payment
      payment_method_types: ["card"],
      line_items: [{ price: planID, quantity: 1 }],
      customer: customer.id, // Ensure you don't create a duplicate customer
      metadata: {
        _id: isUserExist._id.toString(),
        customer: customer.id,
        planType: "OneTimePayment",
      },
      success_url: "http://localhost:8000/api/payment/success",
      cancel_url: "http://localhost:8000/api/payment/fail",
    });

    res.status(200).json({
      message: "Checkout session created successfully.",
      successUrl: checkoutSession.url,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error.",
      issue: error.message,
      success: false,
    });
  }
}

export async function userPlanStatus(req, res) {
  const { _id } = req.query;
  if (typeof _id === "undefined" || _id.trim() === "") {
    return res.status(400).json({
      message: "Please provide all fields.",
      required: "[ _id ]",
      success: false,
    });
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({
      message: "Please provide valid mongoose _id.",
      required: "[ _id ]",
      success: false,
    });
  }

  try {
    const plan = await User.findById(_id).select("plan");
    if (!plan) {
      return res.status(404).json({
        message: "No plan found on given user _id.",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Successful",
      plan: plan.plan,
      success: true,
    });
  } catch (error) {}
}

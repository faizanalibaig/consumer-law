import stripe from "stripe";
import { User } from "../models/User.Model.js";
import { OneTimePayment } from "../models/OneTimePayment.js";
import mongoose from "mongoose";

const Stripe = stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const endpointSecret = process.env.STRIPE_SECRET_ENDPOINT;
export async function webHook(request, response) {
  const sig = request.headers["stripe-signature"];
  let event;
  try {
    event = Stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      if (checkoutSessionCompleted.mode === "payment") {
        await OneTimePayment.create({
          user: checkoutSessionCompleted.metadata._id,
          isPaid: true,
        });
      } else if (checkoutSessionCompleted.mode === "subscription") {
        const user = await User.findById(
          checkoutSessionCompleted.metadata?._id
        );
        if (checkoutSessionCompleted.metadata?.planType === "TRIAL")
          user.isTrialPlanTaken = true;

        user.plan = checkoutSessionCompleted.metadata?.planType;
        await user.save();
      }
      break;

    case "invoice.payment_failed":
      const invoicePaymentFailed = event.data.object;
      await User.findOneAndUpdate(
        { stripeCusId: invoicePaymentFailed.customer },
        {
          $set: {
            plan: "NONE",
          },
        }
      );
      break;

    case "invoice.finalization_failed	":
      const l = event.data.object;
      console.log(l);
      break;

    default:
  }
  response.send();
}

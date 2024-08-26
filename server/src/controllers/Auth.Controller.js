import {
  User,
  validateGenericUser,
  validateUser,
} from "../models/User.Model.js";
import { hashPassword, isPasswordCorrect } from "../utils/Bcrypt.Util.js";
import jwt from "jsonwebtoken";

export async function signUp(req, res) {
  const { error } = validateUser(req.body);
  console.log(validateUser(req.body), "<-- here");
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    let { email, password } = req.body;
    password = await hashPassword(password);

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        message: "Sorry! user already exist on given email.",
        success: false,
      });
    }

    const user = User.create({
      email,
      password,
    });

    return res.status(200).json({
      message: "successfully register.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
      issue: error.message,
    });
  }
}

export async function signIn(req, res) {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    let { email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({
        message: "Oops! No user was found with the provided email.",
        success: false,
      });
    }

    if (!(await isPasswordCorrect(password, isUserExist.password))) {
      return res.status(400).json({
        message: "Uh-oh! It seems like your password is incorrect..",
        success: false,
      });
    }

    const token = jwt.sign({ isUserExist }, process.env.JWT_SECRET_KEY, {
      expiresIn: "60d",
    });

    return res.status(200).json({
      message: "Welcome back! You've successfully logged in.",
      success: true,
      _id: isUserExist._id,
      email: isUserExist.email,
      plan: isUserExist.plan,
      isTrialPlanTaken: isUserExist.isTrialPlanTaken,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
    });
  }
}

export async function googleSignInAndSignUp(req, res) {
  const { error } = validateGenericUser(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  const { email } = req.body;
  try {
    let isExist = await User.findOne({ email });

    if (!isExist) {
      if (!email) {
        return res.status(400).json({
          message: "Please provide email.",
          success: false,
        });
      }
      isExist = await User.create({ email, authType: "GOOGLE" });
    }
    const token = jwt.sign({ isExist }, process.env.JWT_SECRET_KEY, {
      expiresIn: "60d",
    });

    return res.status(200).json({
      message: "Welcome! You have successfully signed in and logged in.",
      success: true,
      _id: isExist._id,
      email: isExist.email,
      plan: isExist.plan,
      isTrialPlanTaken: isExist.isTrialPlanTaken,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
      issue: error.message,
    });
  }

  return;
}

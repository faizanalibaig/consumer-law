import mongoose from "mongoose";
import { OneTimePayment } from "../models/OneTimePayment.js";

export async function oneTimePayment(req, res) {
  const { user } = req.query;
  if (user.trim() === "" || typeof user === "undefined") {
    return res.status(400).json({
      message: "All fields are required.",
      required: "[ user ]",
      success: false,
    });
  }

  if (!mongoose.Types.ObjectId.isValid(user)) {
    return res.status(400).json({
      message: "Provide valid mongoose id user.",
      required: "[ user ]",
      success: false,
    });
  }

  try {
    const oneTimePayment = await OneTimePayment.findOne({ user });
    if (!oneTimePayment) {
      return res.status(404).json({
        message: "No payment found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Successful",
      oneTimePayment,
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

export async function deleteOneTimePayment(req, res) {
  const { user } = req.query;
  if (user.trim() === "" || typeof user === "undefined") {
    return res.status(400).json({
      message: "All fields are required.",
      required: "[ user ]",
      success: false,
    });
  }

  if (!mongoose.Types.ObjectId.isValid(user)) {
    return res.status(400).json({
      message: "Provide valid mongoose id user.",
      required: "[ user ]",
      success: false,
    });
  }

  try {
    const oneTimePayment = await OneTimePayment.findOne({ user });
    if (!oneTimePayment) {
      return res.status(404).json({
        message: "No payment found",
        success: false,
      });
    }

    await OneTimePayment.findByIdAndDelete(oneTimePayment._id);

    return res.status(200).json({
      message: "Successfull",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
      issue: error.message,
    });
  }
}

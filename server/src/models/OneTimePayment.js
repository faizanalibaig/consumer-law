import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const OneTimePaymentSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const OneTimePayment = mongoose.model(
  "OneTimePayment",
  OneTimePaymentSchema
);

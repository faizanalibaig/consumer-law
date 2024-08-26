import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email must be unique."],
    },
    password: {
      type: String,
      min: 8,
      max: 255,
    },
    authType: {
      type: String,
      default: "LOCAL",
      enum: ["LOCAL", "GOOGLE"],
    },
    plan: {
      type: String,
      enum: ["BASIC", "TRIAL", "STANDARD", "PREMIUM", "NONE"],
      default: "NONE",
    },
    isTrialPlanTaken: {
      type: Boolean,
      default: false,
    },
    stripeCusId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

export function validateUser(body) {
  const userSchema = Joi.object().keys({
    email: Joi.string().email().required().label("email").messages({
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
      "string.email": "Invalid email format",
    }),
    password: Joi.string()
      .min(8)
      .max(255)
      .required()
      .label("password")
      .messages({
        "string.min": "Password must be at least 8 characters long",
        "string.max": "Password must not exceed 255 characters",
        "any.required": "Password is required",
      }),
  });

  return userSchema.validate(body);
}

export function validateGenericUser(body) {
  const userSchema = Joi.object().keys({
    email: Joi.string().email().required().label("email").messages({
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty",
      "string.email": "Invalid email format",
    }),
  });

  return userSchema.validate(body);
}

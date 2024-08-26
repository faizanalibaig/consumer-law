import express from "express";
import {
  cancleSubscription,
  createCheckoutSession,
  oneTimePayment,
  plans,
  userPlanStatus,
} from "../controllers/Payment.Controller.js";
import { bufferToJson } from "../bufferToJson.js";
import {
  paymentFailed,
  successfulPayment,
} from "../utils/SuccessfulPayment.js";
const Router = express.Router();

Router.use(express.json());

Router.get("/plan", bufferToJson, plans);
Router.get("/success", async (req, res) => {
  return res.send(successfulPayment());
});
Router.get("/fail", (req, res) => {
  return res.send(paymentFailed());
});

Router.get("/cancleSubscription", bufferToJson, cancleSubscription);
Router.get("/userPlanStatus", bufferToJson, userPlanStatus);

Router.post("/checkout", bufferToJson, createCheckoutSession);
Router.post("/oneTimePayment", bufferToJson, oneTimePayment);

export default Router;

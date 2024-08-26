import express from "express";
import { config } from "dotenv";
import cors from "cors";
const app = express();

// generic - setup
config({ path: "../.env" });
app.use(cors());

/// Api - Baseurl ///
import { ONE_TIME_PAYMENT_URL, PAYMENT_URL, USER_AUTH_BASE_URL } from "./constant.js";

/// Routes - Imports ///
import AuthRoutes from "./Routes/Auth.Routes.js";
import PaymentRoutes from "./Routes/Payment.Routes.js";
import WebhookRoutes from "./Routes/Hooks.Routes.js";
import OneTimePaymentRoutes from "./Routes/OneTimePayment.Routes.js";

/// Routes - Middleware's ///
app.use(PAYMENT_URL, WebhookRoutes);
app.use(USER_AUTH_BASE_URL, AuthRoutes);
app.use(PAYMENT_URL, express.json(), PaymentRoutes);
app.use(ONE_TIME_PAYMENT_URL, OneTimePaymentRoutes);




export { app };

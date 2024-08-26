import express from "express";
import {
  deleteOneTimePayment,
  oneTimePayment,
} from "../controllers/OneTimePayment.Controller.js";
const Router = express.Router();

Router.get("/oneTimePayment", oneTimePayment);

Router.delete("/oneTimePayment", deleteOneTimePayment);


export default Router;

import express from "express";
import { webHook } from "../controllers/Hook.Controller.js";
const Router = express.Router();

Router.use(express.raw({ type: "*/*" }));
Router.post("/webhook", webHook);

export default Router;

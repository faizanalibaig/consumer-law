import express from "express";
import { googleSignInAndSignUp, signIn, signUp } from "../controllers/Auth.Controller.js";
import { bufferToJson } from "../bufferToJson.js";
const Router = express.Router();

Router.use(express.json());
Router.post("/signup", bufferToJson, signUp);
Router.post("/signin", bufferToJson, signIn);
Router.post("/googleSignInAndSignup", bufferToJson, googleSignInAndSignUp);

export default Router;

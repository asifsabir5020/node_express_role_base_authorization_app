import express from "express";
import { login, me, register } from "../controllers/authController.js";
import { authenticate } from "../middlewares/auth.js";
const authRouter = express.Router();

authRouter.route("/auth/register").post(register);
authRouter.route("/auth/login").post(login);
authRouter.route("/auth/me").get(authenticate, me);

export { authRouter };

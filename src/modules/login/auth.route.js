import express from "express";
import { AuthController } from "./auth.controller.js";
import { validateRequestLogin } from "../../middleware/validateRequest.js";

const route = express.Router();

route.post("/login", validateRequestLogin, AuthController.login);

export default route;

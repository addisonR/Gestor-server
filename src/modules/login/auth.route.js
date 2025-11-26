import express from "express";
import { AuthController } from "./auth.controller.js";

const route = express.Router();
const controller = new AuthController();

route.post("/login", controller.login);

export default route;

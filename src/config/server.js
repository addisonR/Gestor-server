import express from "express";
import cors from "cors";
import { Config } from "./config.js";
import authRouter from "../modules/login/auth.route.js";
import { validateJson } from "../middleware/validateJson.js";
import cookieParser from "cookie-parser";

export class Server {
  config;
  app;
  port;

  constructor() {
    this.config = new Config();
    this.app = express();
    this.port = this.config.SERVER_PORT;
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:5173", // Reemplaza por tu URL exacta de Vite
        credentials: true,
      }),
    );
    this.app.use(cookieParser());
    this.app.use(validateJson);
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Bienvenido a mi API");
    });
    //Routes
    this.app.use("/", authRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server in http://localhost:${this.port}`);
    });
  }
}

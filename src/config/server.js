import express from "express";
import { Config } from "./config.js";
import authRouter from "../modules/login/auth.route.js";

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

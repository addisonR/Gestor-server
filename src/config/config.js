import dotenv from "dotenv";
dotenv.config();

export class Config {
  SERVER_PORT;
  constructor() {
    this.SERVER_PORT = process.env.SERVER_PORT || "4000";
  }
}

import { AuthService } from "./auth.service.js";

export class AuthController {
  service;

  constructor() {
    this.service = new AuthService();
  }

  login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const userData = await this.service.loginService(email, password);
      return res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode).json(error.msg);
    }
  };
}

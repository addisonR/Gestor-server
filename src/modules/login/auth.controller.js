import { AuthService } from "./auth.service.js";

export class AuthController {
  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const userData = await AuthService.loginService(email, password);
      return res.status(200).json(userData);
    } catch (error) {
      return res.status(error.statusCode).json(error.msg);
    }
  };
}

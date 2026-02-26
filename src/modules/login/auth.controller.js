import { AuthService } from "./auth.service.js";

export class AuthController {
  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const { token, userData } = await AuthService.loginService(
        email,
        password,
      );
      res.cookie("access_token", token, {
        httpOnly: true, // La cookie no es accesible por JavaScript
        secure: false, // Ponlo en 'true' si usas HTTPS (producción)
        sameSite: "lax", // Evita ataques CSRF
        maxAge: 3600000,
      });
      return res.status(200).json(userData);
    } catch (error) {
      return res.status(error.statusCode).json(error.msg);
    }
  };
}

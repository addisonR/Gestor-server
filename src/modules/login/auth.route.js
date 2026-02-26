import express from "express";
import { AuthController } from "./auth.controller.js";
import { validateRequestLogin } from "../../middleware/validateRequest.js";

const route = express.Router();

route.post("/login", validateRequestLogin, AuthController.login);

route.get("/api/check-session", (req, res) => {
  const token = req.cookies["access_token"]; // El nombre debe coincidir con tu cookie

  if (token) {
    // Aquí podrías validar el token con JWT si quisieras
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(401).json({ authenticated: false });
  }
});

route.post("/logout", (req, res) => {
  // Para eliminar la cookie, usamos res.clearCookie con el nombre exacto
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: false, // Cambiar a true en producción (HTTPS)
    sameSite: "lax",
    path: "/", // Asegúrate de que el path sea el mismo que cuando la creaste
  });

  return res.status(200).json({ message: "Sesión cerrada correctamente" });
});

export default route;

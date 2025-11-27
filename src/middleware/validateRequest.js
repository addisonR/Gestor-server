const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

export function validateRequestLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return res
      .status(400)
      .json({ mgs: "el cuerpo de la requets requiere el email" });
  }
  if (!password || typeof password !== "string") {
    return res
      .status(400)
      .json({ mgs: "el cuerpo de la requets requiere el password" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ mgs: "longitud del password debe ser igual o mayor a 6" });
  }
  next();
}

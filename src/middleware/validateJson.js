export const validateJson = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).send({
      success: false,
      message:
        "JSON no válido. Por favor, revisa la sintaxis del cuerpo de tu solicitud.",
    });
  }
  next(err);
};

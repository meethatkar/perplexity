export const errorHandler = (err, req, res, next) => {
  const status = err.status;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    status,
    message,
    stack: process.env.NODE_ENV === "DEVELOPMENT" ? err.stack : undefined,
  });
};

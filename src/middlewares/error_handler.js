function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  const status = err.status || 500;

  return res.status(status).json({
    success: false,
    message:
      status === 503
        ? "External Rick and Morty API unavailable."
        : err.message || "Internal server error.",
  });
}

function notFound(req, res) {
  return res.status(404).json({
    success: false,
    message: "Route not found.",
  });
}

module.exports = {
  errorHandler,
  notFound,
};

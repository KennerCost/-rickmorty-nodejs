function errorHandler(err, req, res, next) {
  console.error("Erro:", err);

  const status = err.status || 500;

  return res.status(status).json({
    sucesso: false,
    mensagem: status === 500
      ? "Erro interno do servidor"
      : err.message,
  });
}

function notFound(req, res) {
  return res.status(404).json({
    sucesso: false,
    mensagem: "Rota não encontrada",
  });
}

module.exports = {
  errorHandler,
  notFound,
};
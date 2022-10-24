function errorHandler(err, _req, res, _next) {
  console.error(err);
  res.status(500).json({
    succes: false,
    error: err.message
  });
};

module.exports = errorHandler;
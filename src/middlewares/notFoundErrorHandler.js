function notFoundErrorHandler( _err, req, res, _next) {
  res.status(400).json({
    succes: false,
    status: 'Not Found',
    message: `Route ${req.path} does not exists.`
  });
};

module.exports = notFoundErrorHandler;
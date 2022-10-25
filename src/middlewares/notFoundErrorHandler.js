function notFoundErrorHandler( req, res, _next) {
  console.log('entrando a notFound')
  res.status(400).json({
    succes: false,
    status: 'Not Found',
    message: `Route ${req.path} does not exists.`
  });
};

module.exports = notFoundErrorHandler;
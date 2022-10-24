// Para verificar tokkens antes de que inicie la solicitud
const authMiddleware = (req, res, next) => {
  console.info('Estoy auditando la solicitud:', req.body);
  if(req.body.id == 2) {
    return res.status(400).json({
      success: false,
      message: 'No me gusta el ID 2. Baneado.'
    })
  }
  next();
};

module.exports = authMiddleware;
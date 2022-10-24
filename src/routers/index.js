const express = require('express');
const router = express.Router();
const productsRoute = require('./products/products.router');

router.get('/health', (_req, res) => {
  console.log('holis')
  res.status(200).json({
    success: true,
    health: 'Up',
    enviroment: process.env.ENVIROMENT || 'Not Found'
  });
})
.use('/products', productsRoute)

module.exports = router;
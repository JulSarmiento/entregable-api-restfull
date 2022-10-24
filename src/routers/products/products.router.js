const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const Container = require('../../../classes/container.class');

const db = [
  {
    "title": "Collar Elegant",
    "price": 152000,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/products%2Fcollar-elegant%2Fcollar-elegant-ambar-back.jpg?alt=media&token=8985f23e-b5f3-4a34-a388-cef4ed8abb4d",
    "id": 1
  },
  {
    "title": "Collar Elegant",
    "price": 152000,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/products%2Fcollar-elegant%2Fcollar-elegant-ambar-back.jpg?alt=media&token=8985f23e-b5f3-4a34-a388-cef4ed8abb4d",
    "id": 2
  },
  {
    "title": "Collar Elegant",
    "price": 152000,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/products%2Fcollar-elegant%2Fcollar-elegant-ambar-back.jpg?alt=media&token=8985f23e-b5f3-4a34-a388-cef4ed8abb4d",
    "id": 3
  },
  {
    "title": "Collar Elegant",
    "price": 152000,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/products%2Fcollar-elegant%2Fcollar-elegant-ambar-back.jpg?alt=media&token=8985f23e-b5f3-4a34-a388-cef4ed8abb4d",
    "id": 4
  },
];

const products = new Container(db);

router.get('/', (_req, res, next) => {
  try {
    res.status(200).json(products.getAll());
  } catch (err) {
    next(err);
  };

});

// pendeinte middleware de vazlidacion de producto existente o no
router.get('/:id',  (req, res, next) => {
  try{
    const {id} = req.params
    const selected = (products.getById(id));
    console.log(req.body)
    res.status(200).json({
      success: true,
      data: selected
    });
  }
  catch (err) {
    next(err);
  }
})

module.exports = router;
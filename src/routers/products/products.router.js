const express = require('express');
const router = express.Router();
const productExist = require('../../middlewares/authMiddleware');
const Container = require('../../../classes/container.class');

const db = [];
const products = new Container(db);

// get all route
router.get('/', (_req, res, next) => {
  try {
    res.status(200).json(products.getAll());
  } catch (err) {
    next(err);
  };

});

// random route
router.get('/randomProduct', (_req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: products.getRandom()
    })
  }
  catch(err) {
    next(err);
  }
})

// get by id route
router.get('/:id', productExist(products) , (req, res, next) => {
  try{
    const {id} = req.params
    const selected = (products.getById(id));
    res.status(200).json({
      success: true,
      data: selected
    });
  }
  catch (err) {
    next(err);
  }
});

// save product route
router.post('/', (req, res, next) => {
  try {
    products.saveProduct(req.body);
    res.status(200).redirect('/public/index.html');
  }
  catch (err) {
    next(err);
  };
});

// update product route
router.put('/:id', productExist(products), (req, res, next) => {
  try {
    const {id} = req.params;
    // const {body} = req.body;
    console.log('id', id);
    console.log('body', req.body)
    const data = products.update(id, req.body);
    res.status(200).json({
      success: true,
      data: data
    });
  }
  catch(err){
    next(err);
  }
})

// Delete all route
router.delete('/', (_req, res, next) => {
  try{
    products.deleteAll();
    res.status(200).json({
      success : true,
      message: 'All products deleted.',
      data: products.products
    });
  }
  catch (er) {
    next(err);
  };
});

// delete by id route
router.delete('/:id', productExist(products), (req, res, next) => {
  try{
    const {id} = req.params;
    const remainProducts = products.deleteById(id);    
    res.status(200).json({
      success:true,
      message: `Deleted element.`,
      data: remainProducts
    });
  }
  catch(err) {
    next(err);
  };
});



module.exports = router;
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// admin->product POST
router.post('/add-product', productsController.postAddProduct);

//admin ->add-product GET
router.get('/add-product', productsController.getAddProduct);

module.exports = router;
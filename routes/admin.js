const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.post('/add-product', adminController.postAddProduct);

router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getAdminProducts);

module.exports = router;
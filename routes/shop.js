const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/home', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/contact', shopController.getContact);
router.get('/checkout', shopController.getCheckout);
router.get('/', (req, res) => {
    res.redirect('/home');
});
module.exports = router;
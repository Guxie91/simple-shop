const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

//homepage GET
router.get('/', (req, res) => {
    res.redirect('/home');
});
router.get('/home', productsController.getProducts);

module.exports = router;
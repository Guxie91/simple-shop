const express = require('express');
const router = express.Router();
const adminData = require('./admin');

//homepage GET
router.get('/', (req, res) => {
    res.redirect('/home');
});
router.get('/home', (req, res) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: "My Shop",
        path: "/home",
        hasProducts: (products.length > 0),
        productCSS: true,
        activeShop: true
    });
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

exports.routes = router;
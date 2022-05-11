const express = require('express');
const router = express.Router();

const products = [];

// admin->product POST
router.post('/add-product', (req, res) => {
    products.push({
        title: req.body.title
    });
    console.log(req.body);
    res.redirect('/');
});

//admin ->add-product GET
router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        formsCSS: true,
        activeProduct: true
    });
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

exports.routes = router;
exports.products = products;
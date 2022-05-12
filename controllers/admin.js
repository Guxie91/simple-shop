const Product = require('../models/product');

exports.getAdminProducts = (req, res) => {
    res.render('admin/products', {
        pageTitle: "Admin - Products",
        path: "/admin/products"
    });
};

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: "Admin - Add Product",
        path: "/admin/add-product"
    });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/products');
};
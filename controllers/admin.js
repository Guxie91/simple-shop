const Product = require('../models/product');

exports.getAdminProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            pageTitle: "Admin - Products",
            path: "/admin/products",
            prods: products
        });
    });
};

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: "Admin - Add Product",
        path: "/admin/add-product"
    });
};

exports.postAddProduct = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/products');
};
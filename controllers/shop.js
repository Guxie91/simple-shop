const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop/products-list', {
            prods: products,
            pageTitle: "My Shop - Products",
            path: "/products"
        });
    });
};

exports.getIndex = (req, res) => {
    res.render('shop/index', {
        pageTitle: "My Shop - Home",
        path: "/home"
    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        pageTitle: "My Shop - Cart",
        path: "/cart"
    });
};

exports.getContact = (req, res) => {
    res.render('shop/contact', {
        pageTitle: "My Shop - Contact Me",
        path: "/contact"
    });
};

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: "My Shop - Checkout",
        path: "/checkout"
    });
};
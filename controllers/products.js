const products = [];

exports.getAddProduct = (req, res) => {
    products.push({
        title: req.body.title
    });
    console.log(req.body);
    res.redirect('/');
};

exports.postAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        formsCSS: true,
        activeProduct: true
    });
};

exports.getProducts = (req, res) => {
    res.render('shop', {
        prods: products,
        pageTitle: "My Shop",
        path: "/home",
        productCSS: true,
        activeShop: true
    });
};
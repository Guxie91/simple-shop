exports.getNotFound = (req, res, next) => {
    //res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
    res.render('not-found', {
        pageTitle: "My Shop - Not Found",
        path: '/not-found'
    });
    
};


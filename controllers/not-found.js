exports.getNotFound = (req, res, next) => {
    //res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
    res.render('not-found', {
        pageTitle: "404 Not Found",
        path: '/not-found'
    });
    
};


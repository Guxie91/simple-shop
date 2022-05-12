const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const notFoundController = require('./controllers/not-found');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(notFoundController.getNotFound);

app.listen(3000);
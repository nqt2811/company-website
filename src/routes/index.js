const productsRouter = require('./products');
const siteRouter = require('./site');
const productDetailRouter = require('./productDetail');
const adminRouter = require('./administrator');
const contactsRouter = require('./contacts');

function route(app) {
    app.use('/contacts', contactsRouter);
    app.use('/administrator',adminRouter);
    app.use('/products', productDetailRouter);
    app.use('/products', productsRouter);
    app.use('/', siteRouter);
}

module.exports = route;

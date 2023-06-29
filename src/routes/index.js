const productsRouter = require('./products');
const siteRouter = require('./site');
const productDetailRouter = require('./productDetail');

function route(app) {
    app.use('/products', productDetailRouter);
    app.use('/products', productsRouter);
    app.use('/', siteRouter);
}

module.exports = route;

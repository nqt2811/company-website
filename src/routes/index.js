const productsRouter = require('./products');
const siteRouter = require('./site');

function route(app) {
    app.use('/products', productsRouter);
    app.use('/home', siteRouter);
}

module.exports = route;

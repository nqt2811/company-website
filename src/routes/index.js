const productsRouter = require('./products');
const siteRouter = require('./site');
const productDetailRouter = require('./productDetail');
const contactsRouter = require('./contacts');
const servicesRouter = require('./services.js');
const aboutusRouter = require('./about-us.js');

function route(app) {
    app.use('/about-us', aboutusRouter);
    app.use('/services', servicesRouter);
    app.use('/contacts', contactsRouter);
    app.use('/products', productDetailRouter);
    app.use('/products', productsRouter);
    app.use('/home', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;

const Product = require('../models/Product');
const { mongooseToObj } = require('../../util/mongoose');
const handlebars = require('../../index');

class ProductsDetailController {

    async showProductDetail (req, res, next) {
        Product.findOne({slug: req.params.slug})
            .then((product) => {
                res.render('product-detail', {
                    product: mongooseToObj(product),
                    helpers: handlebars.helpers
                })
            })
            .catch(next);
    }

}

module.exports = new ProductsDetailController;

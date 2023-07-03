const Product = require('../models/Product');
const { mongooseToObj } = require('../../util/mongoose');

class ProductsDetailController {

    async showProductDetail (req, res, next) {
        Product.findOne({slug: req.body.slug})
            .then((product) => {

            })
            .catch(next);
    }

}

module.exports = new ProductsDetailController;

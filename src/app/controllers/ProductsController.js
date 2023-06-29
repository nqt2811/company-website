const Product = require('../models/Product');
const { multipleMongooseObj } = require('../../util/mongoose');

class ProductsController {

    async showProducts (req, res, next) {
        Product.find({})
            .then(products => {
                res.render('products', {
                    products: multipleMongooseObj(products)
                })
            })
            .catch(next);
    }

    
}

module.exports = new ProductsController;

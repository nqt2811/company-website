const handlebars = require('../../index');
const { multipleMongooseObj } = require('../../util/mongoose');
const Product = require('../models/Product');

class ProductsController {
  async showProducts (req, res, next) {
    Product.find({})
        .then(products => {
            res.render('products', {
                products: multipleMongooseObj(products),
                helpers: handlebars.helpers
            })
        })
        .catch(next);
  }
}

module.exports = new ProductsController();

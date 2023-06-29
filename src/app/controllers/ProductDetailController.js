const Product = require('../models/Product');
const { mongooseToObj } = require('../../util/mongoose');

class ProductsDetailController {

    async showProductDetail (req, res, next) {
        res.send('Detail');
    }

    
}

module.exports = new ProductsDetailController;

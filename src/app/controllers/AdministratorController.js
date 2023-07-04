const Product = require('../models/Product');
const { multipleMongooseObj } = require('../../util/mongoose');
const { mongooseToObj } = require('../../util/mongoose');

class AdministratorController {

    index(req, res, next) {
        res.render('database/database');
    }

    create(req, res, next) {
        res.render('database/database-create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.using = formData.using.split('\r\n');
        formData.description = formData.description.split('\r\n');
        formData.preserve = formData.preserve.split('\r\n');
        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/administrator/database'))
            .catch(next);
    }

    async showTableListProducts(req, res, next) {
        Product.find({})
            .then(products => res.render('database/database', {
                products: multipleMongooseObj(products),
                helpers: {
                    sum: (a,b) => a+b,
                }
            }))
            .catch(next);
    }

    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('database/edit', {
                product: mongooseToObj(product),
            }))
            .catch(next);
    }

    update(req, res, next) {
        Product.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/administrator/database'))
            .catch(next);
    }

    delete(req, res, next) {
        Product.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/administrator/database'))
            .catch(next);
    }
}

module.exports = new AdministratorController;

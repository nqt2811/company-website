const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductsController');

router.use('/', productsController.showProducts);

module.exports = router;

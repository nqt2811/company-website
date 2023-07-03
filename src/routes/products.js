const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductsController');

router.get('/', productsController.showProducts);

module.exports = router;

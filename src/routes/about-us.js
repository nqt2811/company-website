const express = require('express');
const router = express.Router();
const aboutusController = require('../app/controllers/AboutUsController');

router.get('/', aboutusController.index);

module.exports = router;

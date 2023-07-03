const express = require('express');
const router = express.Router();
const administratorController = require('../app/controllers/ContactsController');

router.get('/', administratorController.index);

module.exports = router;

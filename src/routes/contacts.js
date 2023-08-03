const express = require('express');
const router = express.Router();
const administratorController = require('../app/controllers/ContactsController');

router.get('/', administratorController.index);
router.post('/message', administratorController.message);

module.exports = router;

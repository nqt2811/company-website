const express = require('express');
const router = express.Router();
const administratorController = require('../app/controllers/AdministratorController');

router.use('/database/create', administratorController.create);

module.exports = router;

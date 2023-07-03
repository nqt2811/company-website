const express = require('express');
const router = express.Router();
const administratorController = require('../app/controllers/AdministratorController');

router.get('/:id/edit', administratorController.edit);
router.delete('/:id/delete', administratorController.delete);
router.put('/:id/update', administratorController.update);
router.post('/stored', administratorController.store);
router.get('/create', administratorController.create);
router.get('/', administratorController.showTableListProducts);
router.get('/', administratorController.index);

module.exports = router;

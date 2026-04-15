const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.listEntries);
router.get('/:id', alunoController.getEntryById);
router.post('/', alunoController.createEntry);
router.put('/:id', alunoController.updateEntry);
router.delete('/:id', alunoController.deleteEntry);

module.exports = router;
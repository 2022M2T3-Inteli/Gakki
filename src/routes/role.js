const express = require('express');
const roleController = require('../controllers/role');

const router = express.Router();

router.get('/', roleController.getAllRole);

router.get('/:id', roleController.getRoleById);

router.post('/', roleController.createRole);

router.patch('/:id', roleController.updateRole);

router.delete('/:id', roleController.deleteRole);

module.exports = router;
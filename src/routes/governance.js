const express = require('express');
const governanceController = require('../controllers/governance');

const router = express.Router();

router.get('/', governanceController.getAllGovernance);

router.get('/:id', governanceController.getGovernanceById);

router.post('/', governanceController.createGovernance);

router.patch('/:id', governanceController.updateGovernance);

router.delete('/:id', governanceController.deleteGovernance);

module.exports = router;
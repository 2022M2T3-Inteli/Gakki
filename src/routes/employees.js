const express = require('express');
const employeesController = require('../controllers/employees');

const router = express.Router();

router.get('/', employeesController.getAllEmployees);

router.get('/:id', employeesController.getEmployeeById);

router.post('/', employeesController.createEmployee);

router.post('/:id', employeesController.updateEmployee);

router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;
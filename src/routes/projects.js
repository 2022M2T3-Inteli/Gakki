const express = require('express');
const projectsController = require('../controllers/projects');

const router = express.Router();

router.get('/', projectsController.getAllProjects);

router.get('/:id', projectsController.getProjectById);

router.post('/', projectsController.createProject);

router.patch('/:id', projectsController.updateProject);

router.delete('/:id', projectsController.deleteProject);

module.exports = router;
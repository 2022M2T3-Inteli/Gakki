const express = require('express');
const projectsController = require('../controllers/projects');

const router = express.Router();

router.get('/', projectsController.getAllProjects);

//router.get('/alterar', projectsController.alterProject);

//router.get('/:id', projectsController.getProjectById);

router.post('/', projectsController.createProject);

//router.post('/update', projectsController.updateProject);

router.delete('/:id', projectsController.deleteProject);

module.exports = router;
const express = require('express');
const { createProject, getProjects, getProjectById, updateProject, deleteProject } = require('../controllers/projectController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Project routes
router.post('/', protect, admin, createProject);
router.get('/', protect, admin, getProjects);
router.get('/:projectId', protect, admin, getProjectById);
router.put('/:projectId', protect, admin, updateProject);
router.delete('/:projectId', protect, admin, deleteProject);

module.exports = router;

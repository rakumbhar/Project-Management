const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Task routes
router.post('/', protect, admin, createTask);
router.get('/', protect, admin, getTasks);
router.get('/:taskId', protect, admin, getTaskById);
router.put('/:taskId', protect, admin, updateTask);
router.delete('/:taskId', protect, admin, deleteTask);

module.exports = router;

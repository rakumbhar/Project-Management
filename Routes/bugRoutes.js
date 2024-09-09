const express = require('express');
const { createBug, getBugsByTaskId } = require('../controllers/bugController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Bug routes
router.post('/', protect, createBug);
router.get('/task/:taskId', protect, getBugsByTaskId);

module.exports = router;

const express = require('express');
const { createChat, getChatsByTaskId } = require('../controllers/chatController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Chat routes
router.post('/', protect, createChat);
router.get('/task/:taskId', protect, getChatsByTaskId);

module.exports = router;

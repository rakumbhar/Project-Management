const Chat = require('../models/chatModel');

// Create a new chat message
const createChat = async (req, res) => {
  try {
    const chat = await Chat.create(req.body);
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Error creating chat message', error: error.message });
  }
};

// Get all chat messages for a task
const getChatsByTaskId = async (req, res) => {
  const { taskId } = req.params;
  try {
    const chats = await Chat.find({ taskId }).populate('sender');
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chats', error: error.message });
  }
};

module.exports = { createChat, getChatsByTaskId };

const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  message: { type: String }
});

module.exports = mongoose.model('Chat', chatSchema);

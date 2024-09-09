const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  description: { type: String },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' }
});

module.exports = mongoose.model('Bug', bugSchema);

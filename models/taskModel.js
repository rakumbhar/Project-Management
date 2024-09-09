const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  gitLink: { type: String },
  comments: [{ type: String }],
  status: { type: String },
  chat: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
  bugs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bug' }],
  documentLink: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
  labels: [{ type: String }],
  startDate: { type: Date },
  endDate: { type: Date }
});

module.exports = mongoose.model('Task', taskSchema);

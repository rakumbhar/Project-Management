const Bug = require('../models/bugModel');

// Create a new bug report
const createBug = async (req, res) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: 'Error creating bug report', error: error.message });
  }
};

// Get all bugs for a task
const getBugsByTaskId = async (req, res) => {
  const { taskId } = req.params;
  try {
    const bugs = await Bug.find({ taskId });
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bugs', error: error.message });
  }
};

module.exports = { createBug, getBugsByTaskId };

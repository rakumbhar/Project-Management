const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

// Create a new admin
const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = await Admin.create({ name, email, password });
    
    // Generate a token for the new admin
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token,
      message: 'New admin created successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating admin', error: error.message });
  }
};

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select('-password');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins', error: error.message });
  }
};

// Get a specific admin
const getAdminById = async (req, res) => {
  const { adminId } = req.params;
  try {
    const admin = await Admin.findById(adminId).select('-password');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admin', error: error.message });
  }
};

// Update an admin
const updateAdmin = async (req, res) => {
  const { adminId } = req.params;
  try {
    const admin = await Admin.findByIdAndUpdate(adminId, req.body, { new: true }).select('-password');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Error updating admin', error: error.message });
  }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
  const { adminId } = req.params;
  try {
    const admin = await Admin.findByIdAndDelete(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin', error: error.message });
  }
};

module.exports = { createAdmin, getAdmins, getAdminById, updateAdmin, deleteAdmin };
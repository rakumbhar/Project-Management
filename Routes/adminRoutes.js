const express = require('express');
const { createAdmin, getAdmins, getAdminById, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Admin routes
router.post('/', protect, admin, createAdmin);
router.get('/', protect, admin, getAdmins);
router.get('/:adminId', getAdminById);
router.put('/:adminId', protect, admin, updateAdmin);
router.delete('/:adminId', protect, admin, deleteAdmin);

module.exports = router;
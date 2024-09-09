const mongoose = require('mongoose');
const Admin = require('./models/adminModel');

mongoose.connect('mongodb://localhost:27017/project-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedAdmin = async () => {
  try {
    const admin = await Admin.create({
      name: 'Initial Admin',
      email: 'admin@example.com',
      password: 'password123'
    });
    console.log('Admin user created:', admin);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();



SDFsfdfswdfsd
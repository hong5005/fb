const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: 'user' } // superadmin | user
});

module.exports = mongoose.model('User', userSchema);

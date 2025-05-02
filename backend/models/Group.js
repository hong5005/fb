const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  name: String,
  link: String,
  groupId: String,
  members: Number,
  category: String
});

module.exports = mongoose.model('Group', groupSchema);

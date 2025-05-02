const Group = require('../models/Group');

exports.saveGroups = async (req, res) => {
  const { userId, groups } = req.body;
  const saved = await Group.insertMany(groups.map(g => ({ ...g, userId })));
  res.json(saved);
};

exports.getGroups = async (req, res) => {
  const userId = req.params.userId;
  const groups = await Group.find({ userId });
  res.json(groups);
};

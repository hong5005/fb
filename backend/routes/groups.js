const express = require('express');
const { saveGroups, getGroups } = require('../controllers/groupController');
const router = express.Router();

router.post('/save', saveGroups);
router.get('/list/:userId', getGroups);

module.exports = router;

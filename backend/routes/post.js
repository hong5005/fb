const express = require('express');
const { postToGroup } = require('../controllers/postController');
const router = express.Router();

router.post('/', postToGroup);

module.exports = router;

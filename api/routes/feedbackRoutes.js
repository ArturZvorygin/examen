const express = require('express');
const router = express.Router();
const { sendFeedback } = require('../controllers/feedbackControlller');

router.post('/', sendFeedback);

module.exports = router;

const express = require('express');
const router = express.Router();
const { checkout } = require('../controllers/paymentController');
const { protect } = require('../middleware/auth');

router.post('/create-checkout-session', protect, checkout);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:productId', protect, removeFromCart);
router.delete('/', protect, clearCart); // Clear cart route


module.exports = router;

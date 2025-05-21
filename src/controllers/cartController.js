const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get current user's cart
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json(cart || { items: [] });
};

// Add or update an item in cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const itemIndex = cart.items.findIndex(i => i.product.equals(productId));
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity = quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.json(cart);
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.items = cart.items.filter(item => !item.product.equals(productId));
    await cart.save();
  }

  res.json(cart);
};
// Clear cart
exports.clearCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
    cart.items = [];
    await cart.save();
  }
  res.json(cart);
};
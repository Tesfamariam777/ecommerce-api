// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const Cart = require('../models/Cart');
// const Product = require('../models/Product');

// // Create Stripe Checkout session
// exports.checkout = async (req, res) => {
//   const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

//   if (!cart || cart.items.length === 0) {
//     return res.status(400).json({ message: 'Cart is empty' });
//   }

//   const lineItems = cart.items.map(item => ({
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         name: item.product.name,
//         images: [item.product.image],
//       },
//       unit_amount: Math.round(item.product.price * 100),
//     },
//     quantity: item.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: lineItems,
//     mode: 'payment',
//     success_url: 'https://your-site.com/success',
//     cancel_url: 'https://your-site.com/cancel',
//   });

//   res.json({ url: session.url });
// };

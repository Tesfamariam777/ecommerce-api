const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    image: { type: String },
    category: { type: String },
    brand: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, // track who created the product
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);

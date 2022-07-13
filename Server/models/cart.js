const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  productId: {
    type: String,
    require: true,
    ref: 'products',
  },

  total: {
    type: Number,
  },

  amount: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('cart', cartSchema);

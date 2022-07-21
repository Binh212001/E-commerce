const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'product',
  },
  color: {
    type: String,
    require: true,
  },

  total: {
    type: Number,
  },

  qty: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('cart', cartSchema);

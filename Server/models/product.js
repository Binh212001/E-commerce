const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  color: {
    type: [],
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  rate: {
    type: Number,
    require: true,
  },
  commentId: {
    type: String,
    ref: 'comment',
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('product', productSchema);

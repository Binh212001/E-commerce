const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  displayName: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('user', userSchema);

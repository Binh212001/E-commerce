const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  comment: {
    type: String,
    require: true,
  },

  userId: {
    type: String,
    ref: 'user',
  },

  like: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('comment', commentSchema);

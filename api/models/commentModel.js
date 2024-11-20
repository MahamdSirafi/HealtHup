const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema(
  {
    comment: {
      required: [true, 'must enter doctor'],
      type: String,
    },
    user: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    article: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'Article',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

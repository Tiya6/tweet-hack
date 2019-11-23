const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }, 

  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Tweet'
  }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

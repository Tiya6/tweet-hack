const mongoose = require('mongoose');
require('./comment.model')

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
  
}, { timestamps: true })

tweetSchema.pre('save', function (next) {
  next()
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeedbackSchema = new Schema({
  // Overally experience - (Positive, Neutral, Negative)
  experience: {
    type: String,
    required: true,
  },
  // Was the item correctly described ? (1-5)
  option_described: {
    type: Number,
    require: true,
  },
  // Was Communication good? (1-5)
  option_communication: {
    type: Number,
    required: true,
  },
  // Was Postage handled and fairly priced ? (1-5)
  option_postage: {
    type: Number,
    required: true,
  },
  // Any comments they may have
  comments: {
    type: String,
    required: false,
  },
});

// eslint-disable-next-line no-undef
module.exports = Feedback = mongoose.model('Feedback', FeedbackSchema);

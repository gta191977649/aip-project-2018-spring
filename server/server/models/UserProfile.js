const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Msg = require('../utils/constant');
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  website: {
    type: String,
    default: 'N/A',
  },
  location: {
    type: String,
    default: 'None',
  },
  description: {
    type: String,
    default: Msg.DEFAULT_DESC_USER,
  },
  feedback: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Feedback',
    },
  ],
});
// eslint-disable-next-line
module.exports = UserProfile = mongoose.model('UserProfile', ProfileSchema);

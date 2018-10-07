const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
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

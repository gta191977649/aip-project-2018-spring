const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

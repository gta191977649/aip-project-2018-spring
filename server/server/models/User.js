const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
let UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 7);
  const payload = {
    id: this._id,
    name: this.name,
    avatar: this.avatar,
    handle: this.handle,
  };
  return jwt.sign(payload, keys.secret, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    avatar: this.avatar,
    date: this.date,
    token: this.generateJWT(),
  };
};
// eslint-disable-next-line no-undef
module.exports = User = mongoose.model('User', UserSchema);

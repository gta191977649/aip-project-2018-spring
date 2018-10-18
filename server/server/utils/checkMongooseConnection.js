'use strict';
const mongoose = require('mongoose');

module.exports = () => {
  let connected = mongoose.connection.readyState !== 1;
  console.log('Is Mongoose Connected? ' + !connected);
  return connected;
};

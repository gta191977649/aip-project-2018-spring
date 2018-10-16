'use strict';
const shortid = require('shortid');

module.exports = {
  mongo: process.env.MONGO_URL || 'mongodb://localhost:27017/storeapp_aip',
  secret: process.env.SECRET || 'S3CR3T',
  defaultUser: {
    fname: 'AIP',
    lname: 'Auctions',
    email: 'aipauctions@example.com',
    password: shortid.generate(),
    handle: 'aip-auctions',
  },
};

'use strict';
const shortid = require('shortid');
const isEmpty = require('../utils/isEmpty');

console.log(process.env.MONGO_URL);
console.log(process.env.SECRET);
module.exports = {
  mongo: !isEmpty(process.env.MONGO_URL)
    ? process.env.MONGO_URL
    : 'mongodb://localhost:27017/aipauctions',
  secret: !isEmpty(process.env.SECRET) ? process.env.SECRET : 'S3CR3T',
  defaultUser: {
    fname: 'AIP',
    lname: 'Auctions',
    email: 'aipauctions@example.com',
    password: shortid.generate(),
    handle: 'aip-auctions',
  },
  defaultProducts: {
    shirt: {
      name: 'Default Shirt',
      category: 'clothes',
      qty: 25,
      price: '250.35',
      description: 'This is a default shirt item to display functionality.',
      image: 'uploads/default.bmp',
    },
    phone: {
      name: 'Default Phone',
      category: 'electronics',
      qty: 15,
      price: '499.99',
      description:
        'This phone features a 5.5 inch display and the latest snapdragon processor',
      image: 'uploads/default.bmp',
    },
    bike: {
      name: 'Default Bike',
      category: 'toys',
      qty: 100,
      price: '1495.99',
      description:
        'This bike is more than just a toy, it is a mountain explorer.',
      image: 'uploads/default.bmp',
    },
    texteditor: {
      name: 'Text Program',
      category: 'software',
      qty: 1000,
      price: '14.95',
      description:
        'This software is perfectly built for students, it has all the needed features of similar products.',
      image: 'uploads/default.bmp',
    },
  },
};

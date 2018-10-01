'use strict';
module.exports = {
  db: {
    connector: 'mongodb',
    url: process.env.MONGO_URL,
    useNewUrlParser: true,
  },
};

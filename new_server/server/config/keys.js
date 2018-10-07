'use strict';

module.exports = {
  mongo: process.env.MONGO_URL || 'mongodb://localhost:27017/storeapp_aip',
  secret: process.env.SECRET || 'S3CR3T',
};

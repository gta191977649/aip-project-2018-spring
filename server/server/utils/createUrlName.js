'use strict';
const slugify = require('./slugify');

module.exports = (name) => {
  return slugify(name) + '-' + new Date().valueOf();
};

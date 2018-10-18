const validator = require('validator');
const isEmpty = require('../utils/isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  let isValidEmail = validator.isEmail('' + validator.escape(data.email));
  let isPassValid = validator.isLength(validator.escape(data.password), {
    min: 8,
    max: 24,
  });

  if (!isValidEmail || validator.isEmpty(data.email)) {
    errors.email = 'Email Invalid, example email: email@example.net';
  }

  if (!isPassValid || validator.isEmpty(data.password)) {
    errors.password = 'Password invalid, Min 8 Character, Max 24 Characters.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

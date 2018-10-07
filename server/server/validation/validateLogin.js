const validator = require('validator');
const isEmpty = require('../utils/is-empty');

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
    errors.email = 'Email Invalid';
  }

  if (!isPassValid || validator.isEmpty(data.password)) {
    errors.password = 'Password invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

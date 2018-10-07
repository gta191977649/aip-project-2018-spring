const validator = require('validator');
const isEmpty = require('../utils/is-empty');
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.confirm = !isEmpty(data.confirm) ? data.confirm : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  let isValidEmail = validator.isEmail('' + validator.escape(data.email));
  let isPassValid = validator.isLength(validator.escape(data.password), {
    min: 8,
    max: 24,
  });
  let emailIsValid = validator.isEmail(data.confirm);
  let isEmailSame = validator.equals(data.confirm, data.email) && emailIsValid;
  /* let isNameValid = validator.isAlphanumeric(data.name);*/
  let isNameEmpty = validator.isEmpty(data.name);

  if (!isValidEmail || validator.isEmpty(data.email)) {
    errors.email = 'Email Invalid';
  }
  if (!isPassValid || validator.isEmpty(data.password)) {
    errors.password = 'Password invalid';
  }

  if (!emailIsValid || validator.isEmpty(data.confirm)) {
    errors.confirm = 'Email invalid';
  }
  if (!isEmailSame) {
    errors.confirm = 'Email not the same';
  }
  if (isNameEmpty) {
    errors.name = 'Name is empty';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

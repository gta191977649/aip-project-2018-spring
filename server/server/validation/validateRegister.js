const validator = require('validator');
const isEmpty = require('../utils/is-empty');
module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.handle = !isEmpty(data.handle) ? validator.escape(data.handle) : '';
  data.email = !isEmpty(data.email) ? validator.escape(data.email) : '';
  data.confirm = !isEmpty(data.confirm) ? validator.escape(data.confirm) : '';
  data.name = !isEmpty(data.name) ? validator.escape(data.name) : '';
  data.password = !isEmpty(data.password)
    ? validator.escape(data.password)
    : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? validator.escape(data.passwordConfirm)
    : '';

  let isHandleValid = validator.isLength(data.handle, {min: 2, max: 40});
  let isValidEmail = validator.isEmail('' + data.email);
  let isPassValid = validator.isLength(data.password, {
    min: 8,
    max: 24,
  });

  let isPassConfirmValid = validator.equals(
      data.password,
      data.passwordConfirm
  );
  let isConfirmEmailValid = validator.isEmail(data.confirm);
  let isEmailSame =
    validator.equals(data.confirm, data.email) && isConfirmEmailValid;
  /* let isNameValid = validator.isAlphanumeric(data.name);*/
  let isNameEmpty = validator.isEmpty(data.name);

  if (!isHandleValid || validator.isEmpty(data.handle)) {
    errors.username =
      'Username is invalid, must be between 2 and 40 characters';
  }
  if (!isValidEmail || validator.isEmpty(data.email)) {
    errors.email = 'Email Invalid';
  }
  if (!isPassValid || validator.isEmpty(data.password)) {
    errors.password = 'Password invalid';
  }
  if (!isPassConfirmValid || validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords don\'t match';
  }
  if (!isConfirmEmailValid || validator.isEmpty(data.confirm)) {
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

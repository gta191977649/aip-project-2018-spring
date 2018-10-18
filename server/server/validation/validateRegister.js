const validator = require('validator');
const isEmpty = require('../utils/isEmpty');
module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.handle = !isEmpty(data.handle) ? validator.escape(data.handle) : '';
  data.email = !isEmpty(data.email) ? validator.escape(data.email) : '';
  data.confirm = !isEmpty(data.confirm) ? validator.escape(data.confirm) : '';
  data.fname = !isEmpty(data.fname) ? validator.escape(data.fname) : '';
  data.lname = !isEmpty(data.lname) ? validator.escape(data.lname) : '';
  data.password = !isEmpty(data.password)
    ? validator.escape(data.password)
    : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? validator.escape(data.passwordConfirm)
    : '';

  let isHandleValid = validator.isLength(data.handle, {min: 2, max: 40});
  let isValidEmail = validator.isEmail('' + data.email); // added the blank space to make sure it converts to string properly
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
  let isFNameEmpty = validator.isEmpty(data.fname);
  let isLNameEmpty = validator.isEmpty(data.lname);

  if (!isHandleValid || validator.isEmpty(data.handle)) {
    errors.username =
      'Username is invalid, must be between 2 and 40 characters';
  }
  if (!isValidEmail || validator.isEmpty(data.email)) {
    errors.email = 'Email Invalid. (Example: email@example.com';
  }
  if (!isPassValid || validator.isEmpty(data.password)) {
    errors.password = 'Password invalid, Min 8 Characters, Max 24 Characters';
  }
  if (!isPassConfirmValid || validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords do not match';
  }
  if (!isConfirmEmailValid || validator.isEmpty(data.confirm)) {
    errors.confirm =
      'Emails do not match. Must be the same as the email you entered.';
  }
  if (!isEmailSame) {
    errors.confirm =
      'Emails do not match. Must be the same as the email you entered.';
  }
  if (isFNameEmpty || isLNameEmpty) {
    errors.fname = 'Name is empty';
    errors.lname = 'Name is empty';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

import validator from "validator";

export default function validateInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? validator.escape(data.email) : "";
  data.confirm = !isEmpty(data.confirm) ? validator.escape(data.confirm) : "";
  data.name = !isEmpty(data.name) ? validator.escape(data.name) : "";
  data.password = !isEmpty(data.password)
    ? validator.escape(data.password)
    : "";
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? validator.escape(data.passwordConfirm)
    : "";

  let isValidEmail = validator.isEmail("" + data.email);
  let isPassValid = validator.isLength(data.password, {
    min: 8,
    max: 24
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

  if (!isValidEmail || validator.isEmpty(data.email)) {
    errors.email = "Email Invalid";
  }
  if (!isPassValid || validator.isEmpty(data.password)) {
    errors.password = "Password invalid";
  }

  if (!isPassConfirmValid || validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = "Passwords don't match";
  }
  if (!isConfirmEmailValid || validator.isEmpty(data.confirm)) {
    errors.confirm = "Email invalid";
  }
  if (!isEmailSame) {
    errors.confirm = "Email not the same";
  }
  if (isNameEmpty) {
    errors.name = "Name is empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
// Maybe not needed ?
function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

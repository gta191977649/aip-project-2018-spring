import validator from "validator";

export default function validateInput(data) {
  let errors = {};
  let isValidEmail = validator.isEmail("" + validator.escape(data.email));
  let isPassValid = validator.isLength(validator.escape(data.password), {
    min: 8,
    max: 24
  });
  let emailIsValid = validator.isEmail(data.confirm);
  let isEmailSame = validator.equals(data.confirm, data.email) && emailIsValid;
  let isNameValid = validator.isAlphanumeric(data.name);
  let isNameEmpty = validator.isEmpty(data.name);

  if (!isValidEmail) {
    errors.email = "Email Invalid";
  }

  if (!isPassValid) {
    errors.password = "Password invalid";
  }

  if (!emailIsValid) {
    errors.confirm = "Email invalid";
  }
  if (!isEmailSame) {
    errors.confirm = "Email not the same";
  }
  if(isNameEmpty){
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

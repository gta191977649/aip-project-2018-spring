import validator from "validator";

export default function validateInput(data) {
  let errors = {};
  let isValidEmail = validator.isEmail("" + validator.escape(data.email));
  let isPassValid = validator.isLength(validator.escape(data.password), {
    min: 8,
    max: 24
  });

  if (!isValidEmail) {
    errors.email = "Email Invalid";
  }

  if (!isPassValid) {
    errors.password = "Password invalid";
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

const validator = require('validator');
const isEmpty = require('../utils/isEmpty');
module.exports = function validateLoginInput(data) {
  const errors = {};
  const categories = ['clothes', 'electronics', 'software', 'toys'];

  const {body, file} = data;
  body.name = !isEmpty(body.name) ? validator.escape(body.name) : '';
  body.category = !isEmpty(body.category)
    ? validator.escape(body.category)
    : '';
  body.description = !isEmpty(body.description)
    ? validator.escape(body.description)
    : '';
  body.price = !isEmpty(body.price) ? validator.escape(body.price) : '';

  body.mimetype = !isEmpty(file) ? file.mimetype : '';

  body.qty = !isEmpty(body.qty) ? validator.escape(body.qty) : '';

  const isValidName = validator.isLength(body.name, {min: 4, max: 40});
  const isValidCategory = validator.isIn(body.category, categories);
  const isValidPrice = validator.isDecimal(body.price);

  const isValidDescription = validator.isLength(body.description, {
    min: 20,
    max: 120,
  });

  const isValidQty = validator.isInt(body.qty, {
    gt: 0,
    lt: 1001,
  });
  if (!isValidName || validator.isEmpty(body.name)) {
    errors.name = 'Name is invalid: Min:4 chars, Max: 40 Chars.';
  }

  if (!isValidCategory || validator.isEmpty(body.category)) {
    errors.category = 'Invalid category.';
  }

  if (parseInt(body.price) < 1 || parseInt(body.price) > 10000) {
    errors.price = 'Price is invalid: min 1.00, max: 10000.';
    if (!isValidPrice || validator.isEmpty(body.price)) {
      errors.price = 'Price is invalid: min 1.00, max: 10000.';
    }
  }

  if (!isValidDescription || validator.isEmpty(body.description)) {
    errors.description = 'Description invalid: Min:20 Chars, Max: 120 Chars.';
  }

  if (!isValidQty || validator.isEmpty(body.qty)) {
    errors.qty = 'Quantity is invalid: must be between 1 and 1000.';
  }

  if (body.mimetype !== 'image/jpeg') {
    if (body.mimetype !== 'image/png') {
      errors.image = 'Invalid file: Max Size: 5MB, JPG or PNG Only.';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

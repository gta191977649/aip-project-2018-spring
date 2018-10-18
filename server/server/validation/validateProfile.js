const validator = require('validator');
const isEmpty = require('../utils/isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.website = !isEmpty(data.website) ? validator.escape(data.website) : '';
  data.location = !isEmpty(data.location)
    ? validator.escape(data.location)
    : '';
  data.description = !isEmpty(data.description)
    ? validator.escape(data.description)
    : '';

  let isWebsiteValid =
    validator.isLength(data.website, {
      min: 8,
      max: 24,
    }) &&
    (validator.isURL(data.website) ||
      validator.unescape(data.website) === 'N/A');
  let isLocationValid = validator.isLength(data.location, {
    min: 1,
    max: 30,
  });

  let isDescriptionValid = validator.isLength(data.description, {
    min: 1,
    max: 300,
  });

  if (!isWebsiteValid || validator.isEmpty(data.website)) {
    errors.website =
      'Website is invalid, must be http:// or https:// (example: https://example.net';
  }

  if (!isLocationValid || validator.isEmpty(data.location)) {
    errors.location = 'Location invalid, must be between 1 and 30 characters';
  }

  if (!isDescriptionValid || validator.isEmpty(data.description)) {
    errors.description = 'Description is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

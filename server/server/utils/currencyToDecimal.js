'use string';

module.exports = (inputString) => {
  return inputString.replace(/[^\d.]/g, '');
};

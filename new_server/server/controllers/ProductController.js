let Product = require('../models/Product');

// eslint-disable-next-line no-unused-vars
module.exports.products_list = async (req, res) => {
  // Return product
};

// eslint-disable-next-line no-unused-vars
module.exports.product_info = async (req, res) => {};

module.exports.product_new = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
  });
  let item = await newProduct.save();
  res.json(item);
};

module.exports.product_list_creator = async (req, res) => {
  // Respond with all products created by user
};

module.exports.product_delete = async (req, res) => {
  // Delete a particular product
};

module.exports.product_update = async (req, res) => {
  // Update a product
};

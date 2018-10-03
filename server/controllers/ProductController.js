var Product = require('../models/product');

exports.products_list = function (req, res) {
  //Return product
}

exports.product_info = function (req, res) {

}

exports.product_new = function (req, res) {
  const newProduct = new Product({
    name: req.body.name
  });
  newProduct.save().then(item => res.json(item));
}


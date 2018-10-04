var Product = require('../models/product');

exports.products_list = async function (req, res) {
  //Return product
}

exports.product_info = function (req, res) {

}

exports.product_new = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name
  });
 let res = await newProduct.save();
 res.json(item);
}


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: "string",
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: Array,
    required: true
  },
  description: {
    type: "string"
  },
});

exports.default = Product = mongoose.model('product', prodSchema);

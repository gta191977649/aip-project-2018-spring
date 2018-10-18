const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  hasStock: {
    type: Boolean,
    default: true, // Possible bug in future
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Setter - Convert decimal dollars to cents
ProductSchema.path('price').set(function(num) {
  return num * 100;
});

// eslint-disable-next-line no-undef
module.exports = Product = mongoose.model('Product', ProductSchema);

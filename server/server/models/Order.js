const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  qty: {
    type: Number,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// eslint-disable-next-line no-undef
module.exports.default = Order = mongoose.model('Order', OrderSchema);

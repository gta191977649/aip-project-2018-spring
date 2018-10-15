const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  customer: {
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
module.exports = Order = mongoose.model('Order', OrderSchema);

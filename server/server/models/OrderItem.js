const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  qty: {
    type: Number,
    required: true,
  },
});

// eslint-disable-next-line no-undef
module.exports = OrderItem = mongoose.model('OrderItem', OrderItemSchema);

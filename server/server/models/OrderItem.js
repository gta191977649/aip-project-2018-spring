const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderItemSchema = new Schema({
  products: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  sellers: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

// eslint-disable-next-line no-undef
module.exports = OrderItem = mongoose.model('OrderItem', OrderItemSchema);

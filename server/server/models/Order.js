const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'OrderItem',
    },
  ],
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'OrderItem',
    },
  ],
  total: {
    type: 'Number',
    required: true,
  },
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

// Setter - Convert decimal dollars to cents
OrderSchema.path('total').set(function(num) {
  return num * 100;
});


// eslint-disable-next-line no-undef
module.exports = Order = mongoose.model('Order', OrderSchema);

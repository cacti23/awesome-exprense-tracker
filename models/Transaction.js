const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add the title'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add the amount'],
  },
  isExpense: {
    type: Boolean,
    required: [true, 'Please add isExpense property'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);

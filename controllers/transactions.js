const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route GET api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc Add a transaction
// @route POST api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  res.send('POST transactions');
};

// @desc Delete a transaction
// @route DELETE api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE transactions');
};

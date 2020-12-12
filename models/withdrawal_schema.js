const mongoose = require("mongoose");

const WithdrawalSchema = new mongoose.Schema({
  order_id: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: new Date(),
  },
});

const Withdraw = mongoose.model("withdrawdetails", WithdrawalSchema);

module.exports = Withdraw;
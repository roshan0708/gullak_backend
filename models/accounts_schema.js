const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  threshold_amount: {
    type: Number,
    required: true,
  },
  total_deposit: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "depositdetails",
    },
  ],
  total_withdraw: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "withdrawdetails",
    },
  ]
});

const Account = mongoose.model("accountdetails", AccountSchema);

module.exports = Account;

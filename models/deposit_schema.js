const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
  order_id:{
      type:String,
      required:true
  },
  amount:{
      type:Number,
      required:true,
  },
  date:{
      type:String,
      required:true,
      default: new Date(),
  }
});

const Deposit = mongoose.model("depositdetails", DepositSchema);

module.exports = Deposit;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = bcrypt.genSaltSync(12);

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accountdetails",
    },
  ],
});

UserSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hashSync(this.password, saltRounds);
  this.password = hash;
  next();
});

const User = mongoose.model("userdetails", UserSchema);

module.exports = User;
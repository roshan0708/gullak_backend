const mongoose = require("mongoose");

const URI =
  "mongodb+srv://roshan:kotk67890@cluster0.wm7o9.mongodb.net/gullak_users?retryWrites=true&w=majority";

const connectionParams = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
};
const connectDB = () => {
    mongoose
      .connect(URI, connectionParams)
      .then(() => {
        console.log("Connected to database!!!!");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
};

module.exports = connectDB;

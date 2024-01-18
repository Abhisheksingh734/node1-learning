const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practicedb2");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  description: String,
  age: Number,
  categories: {
    type: Array,
    default: [],
  },
  datecreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", userSchema);

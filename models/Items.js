const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Customer = mongoose.model("Customer", customerSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adultMember = new Schema({
  firstName: String,
  surName: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Adult", adultMember);

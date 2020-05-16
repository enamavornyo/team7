const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const churchMember = new Schema({
  firstName: String,
  surName: String,
  dob: String,
  age: Number,
  sex: String,
  service: String,
  registered: Boolean,
  otherNames: String,
  email: String,
  address: String,
  phoneNumber: String,
  nationality: String,
  areaOfResidence: String,
});

module.exports = churchMember;

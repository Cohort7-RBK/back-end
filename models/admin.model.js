const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    default:"kiisjdbpmz2514dbdh"
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  img: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  cin: {
    type: Number,
    unique: true,
    required: true
  },
  phone: {
    type: Number
  },
  birthday: {
    type: Date
  },
  role: {
    type: String,
    default: "admin"
  }
});

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;

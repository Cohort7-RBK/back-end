const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    default: "hellothere"
  },
  firstname: {
    type: String
  },
  lastname: {
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
  img: {
    type: String
  },
  birthday: {
    type: Date
  },
  class: {
    type: String
  },
  level: {
    type: String
  },
  phone: {
    type: Number
  },
  role: {
    type: String,
    default: "student"
  }
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;

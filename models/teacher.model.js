const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    default: "iuidok874soqq"
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
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class"
    }
  ],
  role: {
    type: String,
    default: "teacher"
  }
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;

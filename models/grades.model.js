const mongoose = require("mongoose");
const gradeSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class"
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  },
  grade: {
    type: Object
  },
  avr: Number
});

const gradeModel = mongoose.model("grade", gradeSchema);

module.exports = gradeModel;

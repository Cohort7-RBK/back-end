const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  name: {
    type: String
  },
  course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course"
    }
  ],
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student"
    }
  ]
});

const classModel = mongoose.model("class", classSchema);

module.exports = classModel;

const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  title: {
    type: String
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  },
  lecture: [
    {
      type: String
    }
  ],
  homework: [
    {
      type: String
    }
  ]
});

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;

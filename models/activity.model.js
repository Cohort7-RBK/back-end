const mongoose = require("mongoose");
const ActivitySchema = new mongoose.Schema({
  acitvityName: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date
  },
  hour: {
    type: String
  },
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student"
    }
  ]
});

const ActivityModel = mongoose.model("Activity", ActivitySchema);

module.exports = ActivityModel;

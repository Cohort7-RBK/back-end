const mongoose = require("mongoose");
const scheduleSchema = new mongoose.Schema({
  Subject: {
    type: String
  },
  StartTime: {
    type: Date
  },
  EndTime: {
    type: Date
  },
  Description: {
    type: String
  },
   id:{type:Number}




});

const ScheduleSchema = mongoose.model("schedule", scheduleSchema);

module.exports = ScheduleSchema;
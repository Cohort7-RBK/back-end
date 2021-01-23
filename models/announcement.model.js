const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema({
  text: String,
  date: String
});

const AnnouncementModel = mongoose.model("announcement", announcementSchema);

module.exports = AnnouncementModel;

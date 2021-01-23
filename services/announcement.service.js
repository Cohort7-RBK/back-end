const Ann = require("../models/announcement.model.js");

module.exports.getAnnouncements = function () {
  return Ann.find();
};

module.exports.deleteById = function (id) {
  return Ann.findByIdAndDelete(id);
};

module.exports.insertOne = function (obj) {
  return Ann.create(obj);
};

module.exports.update = function (id, obj) {
  return Ann.findByIdAndUpdate(id, obj);
};

module.exports = new (class TeachertService {
  constructor() {
    this.teacher = require("../models/teacher.model.js");
  }
  getTeacher(payload) {
    return this.teacher.findOne({
      username: payload.username
    });
  }
  getTeachers() {
    return this.teacher.find().populate("classes");
  }
  deleteTeacherById({ _id }) {
    return this.teacher.findByIdAndDelete(_id);
  }
  updateTeacherById(_id, payload) {
    return this.teacher.findByIdAndUpdate(_id, payload);
  }
  getTeacherById({ _id }) {
    return this.teacher.findById(_id).populate("classes");
  }
  addTeacher(payload) {
    return this.teacher.create(payload);
  }
})();

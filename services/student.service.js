module.exports = new (class StudentService {
  constructor() {
    this.student = require("../models/student.model.js");
  }
  getStudent(payload) {
    return this.student.findOne({
      username: payload.username
    });
  }

  getStudents() {
    return this.student.find();
  }
  deleteStudentById({ _id }) {
    return this.student.findByIdAndDelete(_id);
  }
  updateStudentById(_id, payload) {
    return this.student.findByIdAndUpdate(_id, payload);
  }
  getStudentById({ _id }) {
    return this.student.findById(_id);
  }

  addStudent(payload) {
    return this.student.create(payload);
  }
})();

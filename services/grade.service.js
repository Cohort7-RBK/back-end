module.exports = new (class GradeService {
  constructor() {
    this.grade = require("../models/grades.model.js");
  }

  getGrade() {
    return this.grade.find().populate("student").populate("class");
  }
  getGradeById({ student }) {
    return this.grade
      .find({ student: student })
      .populate("student")
      .populate("class");
  }
})();

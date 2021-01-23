const gradeService = require("../services/grade.service.js");

module.exports = {
  async getGrade(req, res, next) {
    try {
      const grades = await gradeService.getGrade();
      res.send(grades);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getGradeById(req, res, next) {
    try {
      const grade = await gradeService.getGradeById(req.params);
      res.send(grade);
    } catch (error) {
      // handle error
      res.send("error");
    }
  }
};

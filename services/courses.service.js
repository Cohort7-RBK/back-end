module.exports = new (class CoursesService {
  constructor() {
    this.course = require("../models/courses.model.js");
  }
  getAllCourses() {
    return this.course.find();
  }
  getOneCourse(course) {
    return this.course.findOne(course);
  }
  addCourse(obj) {
    console.log(obj);
    return this.course.create({
      title: obj.title,
      lecture: obj.lecture,
      homework: obj.homework
    });
  }
  updateCourse(id, course) {
    return this.course.findOneAndUpdate(id, course);
  }
  deleteCourse(id) {
    return this.course.findOneAndRemove(id);
  }
})();

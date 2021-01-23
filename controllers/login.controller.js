/* 

The controller layer is where the logic part of your application is going to be implemented
if you have authentication for example, here is where you are going to hash, compare and so on...

In order to add a new controller, just follow the following style:

  async [NAME_OF_THE_FUNCTION](req, res, next) {
    try {
      const [VARIABLE] = await [NAME_OF_THE_SERVICE].[NAME_OF_THE_SERVICE_FUNCTION]()
      res.send([VARIABLE])
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },


*/

const adminService = require("../services/admin.service.js");
const teacherService = require("../services/teacher.service.js");
const studentService = require("../services/student.service.js");
const bcrypt = require("bcrypt");
module.exports = {
  async login(req, res, next) {
    try {
      if (req.body.role === "admin") {
        const admin = await adminService.getAdmin(req.body);

        if (!admin) {
          res.status(400).json({ message: " Unauthorized request" });
          res.end();
        } else {
          // bcrypt.compare(password, admin.password);
          res.send(admin);
        }
      } else if (req.body.role === "teacher") {
        const teacher = await teacherService.getTeacher(req.body);
        if (!teacher) {
          res.status(400).json({ message: " Unauthorized request" });
          res.end();
        } else {
          // bcrypt.compare(password, teacher.password);
          res.send(teacher);
        }
      } else {
        const student = await studentService.getStudent(req.body);
        if (!student) {
          res.status(400).json({ message: " Unauthorized request" });
          res.end();
        } else {
          // bcrypt.compare(password, student.password);
          res.send(student);
        }
      }
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

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
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PSW
  }
});

const studentService = require("../services/student.service.js");

module.exports = {
  async getStudents(req, res, next) {
    try {
      const students = await studentService.getStudents();
      res.send(students);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateStudentById(req, res, next) {
    try {
      const student = await studentService.updateStudentById(
        req.params,
        req.body
      );
      res.send(student);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async deleteStudentById(req, res, next) {
    try {
      const student = await studentService.deleteStudentById(req.params);
      res.send(student);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getStudentById(req, res, next) {
    try {
      const student = await studentService.getStudentById(req.params);
      res.send(student);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addStudent(req, res, next) {
    try {
      const student = await studentService.addStudent(req.body);

      var mailOptions = {
        from: process.env.EMAIL,
        to: student.email,
        subject: "Your Student Acoount was created",
        text:
          "Welcome! " +
          student.username +
          " we are so lucky to have you with us. we hope you enjoy it. Please login with this  password :" +
          student.password +
          " and it would be better if you change it for yor securety"
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send(student);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

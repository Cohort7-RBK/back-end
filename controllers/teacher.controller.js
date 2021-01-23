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

const teacherService = require("../services/teacher.service.js");

module.exports = {
  async getTeachers(req, res, next) {
    try {
      const teachers = await teacherService.getTeachers();
      res.send(teachers);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateTeacherById(req, res, next) {
    try {
      const teacher = await teacherService.updateTeacherById(
        req.params,
        req.body
      );
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async deleteTeacherById(req, res, next) {
    try {
      const teacher = await teacherService.deleteTeacherById(req.params);
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getTeacherById(req, res, next) {
    try {
      const teacher = await teacherService.getTeacherById(req.params);
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addTeacher(req, res, next) {
    try {
      const teacher = await teacherService.addTeacher(req.body);

      var mailOptions = {
        from: process.env.EMAIL,
        to: teacher.email,
        subject: "Your Teacher Acoount was created",
        text:
          "Welcome! " +
          teacher.username +
          " we are so lucky to have you with us. we hope you enjoy it. Please login with this  password :" +
          teacher.password +
          " and it would be better if you change it for yor securety"
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send(teacher);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

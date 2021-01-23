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

const adminService = require("../services/admin.service.js");

module.exports = {
  async getAdmins(req, res, next) {
    try {
      const admins = await adminService.getAdmins();
      res.send(admins);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateAdminById(req, res, next) {
    try {
      const admin = await adminService.updateAdminById(req.params, req.body);
      res.send(admin);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async deleteAdminById(req, res, next) {
    try {
      const admin = await adminService.deleteAdminById(req.params);
      res.send(admin);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getAdminById(req, res, next) {
    try {
      const admin = await adminService.getAdminById(req.params);
      res.send(admin);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addAdmin(req, res, next) {
    try {
      const admin = await adminService.addAdmin(req.body);
      var mailOptions = {
        from: process.env.EMAIL,
        to: admin.email,
        subject: "Your Admin Acoount was created",
        text:
          "Welcome! " +
          admin.username +
          " we are so lucky to have you with us. we hope you enjoy it. Please login with this  password :" +
          admin.password +
          " and it would be better if you change it for yor securety"
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send(admin);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

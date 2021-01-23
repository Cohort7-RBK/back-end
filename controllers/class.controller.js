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

const classService = require("../services/class.service.js");

module.exports = {
  async getClasses(req, res, next) {
    try {
      const classs = await classService.getClasses();
      res.send(classs);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateClassById(req, res, next) {
    try {
      const classs = await classService.updateClassById(
        req.params,
        req.body
      );
      res.send(classs);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async deleteClassById(req, res, next) {
    try {
      const classs = await classService.deleteClassById(req.params);
      res.send(classs);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async getClassById(req, res, next) {
    try {
      const classs = await classService.getClassById(req.params);
      res.send(classs);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addClass(req, res, next) {
    try {
      const classs = await classService.addClass(req.body);
      res.send(classs);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

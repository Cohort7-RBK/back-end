const activityService = require("../services/activity.service.js");

module.exports = {
  async getactivitys(req, res, next) {
    try {
      const activitys = await activityService.getactivitys();
      res.send(activitys);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async getactivityById(req, res, next) {
    try {
      const activity = await activityService.getactivityById(req.params);
      res.send(activity);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addactivity(req, res, next) {
    try {
      const activity = await activityService.addactivity(req.body);
      res.send(activity);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },
  async deleteactivityById(req, res, next) {
    try {
      const activity = await activityService.deleteactivity(req.params);
      res.send(activity);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

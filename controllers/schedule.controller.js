const scheduleService = require("../services/schedule.service.js");

module.exports = {
  async getschedules(req, res, next) {
    try {
      const schedules = await scheduleService.getschedules();
      res.send(schedules);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },

  async getscheduleById(req, res, next) {
    try {
      const schedule = await scheduleService.getScheduleById(req.params);
      res.send(schedule);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },
  async deletescheduleById(req, res, next) {
    try {
      const schedule = await scheduleService.deleteSchedule(req.params);
      res.send(schedule);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },
  async addschedule(req, res, next) {
    try {
      const schedule = await scheduleService.addSchedule(req.body);
      res.send(schedule);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },
  async updateschedule(req, res, next) {
    try {
      const schedule = await scheduleService.updateSchedule(req.params,req.body, {upsert: true});
      res.send(schedule);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};

module.exports = new (class ScheduleService {
  constructor() {
    this.Schedule = require("../models/schedule.model.js");
  }

  getschedules() {
    return this.Schedule.find();
  }

  getScheduleById({_id}) {
    return this.Schedule.findById(_id)
  }

  addSchedule(payload) {
    return this.Schedule.create(payload);
  }
  deleteSchedule({_id}){
    return this.Schedule.findByIdAndRemove(_id)
  }
  updateSchedule({_id},paylod){
    return this.Schedule.findByIdAndUpdate(_id,paylod)
  }
})();
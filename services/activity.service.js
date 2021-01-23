module.exports = new (class activityService {
  constructor() {
    this.activity = require("../models/activity.model.js");
  }

  getactivitys() {
    return this.activity.find();
  }

  getactivityById({ _id }) {
    return this.activity.findById(_id);
  }

  addactivity(payload) {
    return this.activity.create(payload);
  }

  deleteactivity({ _id }) {
    return this.activity.findByIdAndDelete(_id);
  }
})();

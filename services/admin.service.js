module.exports = new (class AdminService {
  constructor() {
    this.admin = require("../models/admin.model.js");
  }
  getAdmin(payload) {
    return this.admin.findOne({
      username: payload.username
    });
  }
  getAdmins() {
    return this.admin.find();
  }
  deleteAdminById({ _id }) {
    return this.admin.findByIdAndDelete(_id);
  }
  updateAdminById(_id, payload) {
    return this.admin.findByIdAndUpdate(_id, payload);
  }
  getAdminById({ _id }) {
    return this.admin.findById(_id);
  }
  addAdmin(payload) {
    return this.admin.create(payload);
  }
})();

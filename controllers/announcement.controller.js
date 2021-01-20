const announcementService = require("../services/announcement.service.js");

module.exports = {
  async getAnnouncements(req, res, next) {
    const ann = await announcementService.getAnnouncements();
    res.send(ann);
  },

  deleteById: function (req, res) {
    announcementService.deleteById(req.params.id).then(() => {
      announcementService.getAnnouncements().then((data) => {
        res.send(data);
      });
    });
  },

  insertOne: function (req, res) {
    announcementService.insertOne(req.body).then((data) => {
      res.send(data);
    });
  }
};

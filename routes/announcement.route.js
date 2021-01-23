const router = require("express").Router();
const announcementController = require("../controllers/announcement.controller.js");

router.get("/", announcementController.getAnnouncements);

router.delete("/:id", announcementController.deleteById);

router.post("/", announcementController.insertOne);

router.put("/:id", announcementController.update);

module.exports = router;

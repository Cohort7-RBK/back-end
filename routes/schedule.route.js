
const router = require("express").Router();
const scheduleController = require("../controllers/schedule.controller.js");

router.get("/", scheduleController.getschedules);

router.post("/", scheduleController.addschedule);

router.get("/:_id", scheduleController.getscheduleById);

router.delete("/:_id",scheduleController.deletescheduleById)
router.put("/:_id",scheduleController.updateschedule)
module.exports = router;

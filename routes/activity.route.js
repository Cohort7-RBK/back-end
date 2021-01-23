const router = require("express").Router();
const activityController = require("../controllers/activity.controller.js");

router.get("/", activityController.getactivitys);

router.post("/", activityController.addactivity);

router.get("/:_id", activityController.getactivityById);
router.delete("/:_id", activityController.deleteactivityById);

module.exports = router;

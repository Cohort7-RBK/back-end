const router = require("express").Router();
const coursesController = require("../controllers/courses.controller.js")

router.post("/", coursesController.addCourse);
router.put("/", coursesController.updateCourse);
router.delete("/", coursesController.deleteCourse);
router.get("/", coursesController.getOneCourse);
router.get("/courses", coursesController.getAllCourses);

module.exports = router;





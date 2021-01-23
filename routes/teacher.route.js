/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const teacherController = require("../controllers/teacher.controller.js");

router.get("/", teacherController.getTeachers);

router.post("/", teacherController.addTeacher);

router.get("/:_id", teacherController.getTeacherById);

router.put("/:_id", teacherController.updateTeacherById);

router.delete("/:_id", teacherController.deleteTeacherById);

module.exports = router;

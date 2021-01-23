/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const studentController = require("../controllers/student.controller.js");

router.get("/", studentController.getStudents);

router.post("/", studentController.addStudent);

router.get("/:_id", studentController.getStudentById);

router.put("/:_id", studentController.updateStudentById);

router.delete("/:_id", studentController.deleteStudentById);

module.exports = router;

/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const gradeController = require("../controllers/grade.controller.js");

router.get("/", gradeController.getGrade);
router.get("/:student", gradeController.getGradeById);

module.exports = router;

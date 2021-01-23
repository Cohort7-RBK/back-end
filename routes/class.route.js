/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const classController = require("../controllers/class.controller.js");

router.get("/", classController.getClasses);

router.post("/", classController.addClass);

router.get("/:_id", classController.getClassById);

router.put("/:_id", classController.updateClassById);

router.delete("/:_id", classController.deleteClassById);

module.exports = router;

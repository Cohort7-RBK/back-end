/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const adminController = require("../controllers/admin.controller.js");

router.get("/", adminController.getAdmins);

router.post("/", adminController.addAdmin);

router.get("/:_id", adminController.getAdminById);

router.put("/:_id", adminController.updateAdminById);

router.delete("/:_id", adminController.deleteAdminById);

module.exports = router;

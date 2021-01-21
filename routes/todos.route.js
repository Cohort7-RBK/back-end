const router = require("express").Router();
const todosController = require("../controllers/todos.controller.js");
//get All tasks
router.get("/", todosController.getTodos);
// add task
router.post("/", todosController.addTodos);
//get single task
router.get("/:_id", todosController.getTodosById);
//delete task
router.delete("/:_id", todosController.deleteTodosById);
//delete all
router.delete("/", todosController.deleteTodos);
//updtate task
router.put("/:id", todosController.updateTodosById);

module.exports = router;
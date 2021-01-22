const todosService = require("../services/todos.service.js");
const TaskModel = require("./../models/todo.model");

module.exports = {
  async getTodos(req, res, next) {
    try {
      const todos = await todosService.getTodos();
      res.send(todos);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async getTodosById(req, res, next) {
    try {
      const todo = await todosService.getTodosById(req.params);
      res.send(todo);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async addTodos(req, res, next) {
    console.log(req.body);
    var newTodo = new TaskModel({
      text: req.body.text,
      idDone: req.body.isDone
    });
    try {
      const savedtodo = await newTodo.save();
      res.send(savedtodo);
    } catch (error) {
      // handle error
      res.send("error while creating task");
    }
  },
  async deleteTodos(req, res, next) {
    try {
      const deleteTodo = await todosService.deleteTodos();
      res.send(deleteTodo);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async deleteTodosById(req, res, next) {
    try {
      const deleteTodosById = await todosService.deleteTodosById(req.params);
      res.send(deleteTodosById);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },
  async updateTodosById(req, res, next) {
    try {
      const updateTodosById = await todosService.updateTodosById(req.params);
      res.send(updateTodosById);
    } catch (error) {
      // handle error
      res.send("error");
    }
  }
};

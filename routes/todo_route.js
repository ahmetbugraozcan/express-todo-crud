const express = require("express");
// import * as todoController from "../controllers/todo_controller.js";
const todoController = require("../controllers/todo_controller.js");

const router = express.Router();

router.post("/", todoController.create);

router.get("/todos", todoController.findAll);
router.get("/todo/:id", todoController.findOne);
router.put("/todo/:id", todoController.update);
router.delete("/todo/:id", todoController.deleteTodo);

module.exports = router;

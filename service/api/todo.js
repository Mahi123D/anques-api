var express = require('express');
var router = express.Router();
var controller = require("./todo.controller");

router.post("/", controller.saveTodo);
router.get("/list", controller.getTodoList);
router.get("/todo/:id", controller.getById);
router.get("/tododelete/:id", controller.deleteById);

module.exports = router;
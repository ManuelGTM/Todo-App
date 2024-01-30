const { Router } = require("express");
const pool = require("../dbConfig.js");
const {
  getTask,
  updateTask,
  createTask,
  deleteTask,
  getAllTasks,
} = require("../controllers/tasks.controller.js");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;

const pool = require("../dbConfig.js");

// Controllers

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await pool.query("Select * from task");
    res.json(allTasks.rows);
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const Task = await pool.query(`Select * from task where id = $1`, [id]);

    if (Task.rows.length === 0) return res.status(404);

    res.status(200).json(Task.rows[0]);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) values ($1, $2) RETURNING *",
      [title, description],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "Update task set title=$1, description=$2 where id = $3 returning *",
      [title, description, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  const id = parseInt(req.params.id);

  const result = await pool.query("Delete from task where id = $1", [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  return res.sendStatus(204);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

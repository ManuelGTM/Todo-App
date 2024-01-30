const pool = require("../dbConfig.js");

// Controllers

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("Select * from tasks");
    res.json(allTasks.rows);
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const Task = await pool.query(`Select * from tasks where id = $1`, [id]);

    if (Task.rows.length === 0) return res.status(404);

    res.json(Task.rows[0]);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description) values ($1, $2) RETURNING *",
      [title, description],
    );

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
    res.json({ err: err.message });
  }
};

const updateTask = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "Update tasks set title=$1, description=$2 where id = $3 returning *",
      [title, description, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res) => {
  const id = parseInt(req.params.id);

  const result = await pool.query("Delete from tasks where id = $1", [id]);

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

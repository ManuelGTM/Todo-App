// Controllers

const getAllTasks = async (req, res) => {
  const result = await pool.query("select now()");
  console.log(result);
  res.json(result.rows[0].now);
};

const getTask = (req, res) => {
  res.send("Retrieving a single task");
};

const createTask = (req, res) => {
  res.send("Creating a task");
};

const updateTask = (req, res) => {
  res.send("Updating a task");
};

const deleteTask = (req, res) => {
  res.send("Deleting a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

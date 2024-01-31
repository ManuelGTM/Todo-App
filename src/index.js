const express = require("express");
const PORT = 4000;
const router = require("./routes/task.routes.js");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});

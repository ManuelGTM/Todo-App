const express = require("express");
const PORT = 4000;
const router = require("./routes/task.routes.js");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(router);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});

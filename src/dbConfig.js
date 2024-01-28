const { Pool } = require("pg");

const pool = new Pool({
  user: "mt",
  password: "2206",
  host: "localhost",
  port: 5432,
  database: "taskdo",
});

pool.connect((err) => {
  if (!err) {
    console.log("Connection Successfully :)");
  } else {
    console.log("Connection Failed :(");
  }
});

module.exports = pool;

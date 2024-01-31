const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  // user: db.user,
  // password: db.password,
  // host: db.host,
  // port: db.port,
  // database: db.database,
  user: "mt",
  password: 2206,
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

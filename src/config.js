require("dotenv").config();

module.exports = {
  db: {
    user: process.env.DB_USERS,
    password: process.env.DB_PASSWORDS,
    host: process.env.DB_HOSTS,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
};

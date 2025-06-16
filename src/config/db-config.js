const { Pool } = require('pg');

const pool = new Pool({
  user: 'blog_user',
  host: 'localhost',
  database: 'blog_db',
  password: 'blog_password',
  port: 5400,
});

const sequelize = {
  HOST: "localhost",
  USER: "blog_user",
  PASSWORD: "blog_password",
  DB: "blog_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = {pool,sequelize};

// module.exports = {
//   HOST: "localhost",
//   USER: "blog_user",
//   PASSWORD: "blog_password",
//   DB: "blog_db",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
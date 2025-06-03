const { Pool } = require('pg');

const pool = new Pool({
  user: 'blog_user',
  host: 'localhost',
  database: 'blog_db',
  password: 'blog_password',
  port: 5400,
});

module.exports = pool;
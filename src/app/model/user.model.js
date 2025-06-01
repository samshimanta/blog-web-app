const pool = require('../../config/db-config');



const UserModel = {
    getAll: async () => {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);
        return result.rows;
      },
      create:async(name, email , location) => {
        const query = 'INSERT INTO users (name, email, location) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, location];
        const result = await pool.query(query, values);
        return result.rows[0];
      }
}

module.exports = UserModel
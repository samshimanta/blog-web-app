const dbConfigure = require('../../config/db-config');
const pool = dbConfigure.pool 



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
      },
      getByLocation: async (location) => {
        const query = 'SELECT * FROM users WHERE location = $1';
        const values = [location];
        const result = await pool.query(query, values);
        return result.rows;
    },
}

module.exports = UserModel
const express = require('express');
const dbConfigure = require('./src/config/db-config');
const userRoutes = require('./src/app/route/user.route')
const tutorialRoutes = require("./src/app/route/turorial.routes")
const authorRoutes = require("./src/app/route/author.route")

const pool = dbConfigure.pool 

const app = express();
app.use(express.json());

const db = require("./src/app/model/index")
db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Use the user routes
app.use('/users', userRoutes);
app.use('/tutorials' , tutorialRoutes)
app.use('/author'  , authorRoutes)
 
// // Route to get all users
// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// //Route for adding data
// app.post('/users', async (req, res) => {
//     const { name, email } = req.body;
//     try {
//       const result = await pool.query(
//         'INSERT INTO users (name, email,location) VALUES ($1, $2, $3) RETURNING *',
//         [name, email]
//       );
//       res.status(201).json(result.rows[0]);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} Congratulations!!!`));
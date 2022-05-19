const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const PORT = 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// add a todo
app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

// start the server
app.listen(PORT, () => {
    console.log("server started on port " + PORT);
});
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
const api = 

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//db connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);

//


app.use((req, res) => {res.status(404).end()});

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
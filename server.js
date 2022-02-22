const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express(); 

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

function viewAllEmployees() {
    let query = "SELECT * FROM employee"
    
    return allEmployees;
};

function addEmployee() {
    let query = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?";

    return
};

function updateEmployeeRole() {
    query = "";
};

function viewAllRoles() {
    query = "";
    
    return roles;
};

function addRole() {
    query = "";

    return
};

function viewAllDepartments() {
    let query = "";

    return allDepartments;
};

function addDepartment() {
    query ="";

    return
};

function quit() {
    return
};

//

app.use((req, res) => {
    res.status(404).end()
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
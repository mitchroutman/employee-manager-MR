const inquirer = require("inquirer");
const mysql = require('mysql2');
const { listenerCount } = require("mysql2/typings/mysql/lib/Connection");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Telecaster',
        database: 'employees_db'
    },
    console.log(`Connected to the movies_db database.`)
);

db.connect(err => {
    if(err) throw err;
    mainMenu()
})

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selector',
            message: 'What would you do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ]).then(({selector}) => {
            if(selector === "View All Employees") {
                // some action
                viewAllEmployees()
            } else if (selector === "Add Employee") {
                // some action
                addEmployee()
            } else if (selector === "Update Employee Role") {
                // some action
                updateEmployeeRole()
            } else if (selector === "View All Roles") {
                // some action
                viewAllRoles()
            } else if (selector === "Add Role") {
                // some action
                addRole()
            } else if (selector === "View All Departments") {
                // some action
                viewDept()
            } else if (selector === "Add Department") {
                // some action
                addDept()
            } else if (selector === "Quit") {
                return
            }
        })
    
}

function viewDept() {
    const queryStr = `
    SELECT *
    FROM department`

    db.query(queryStr, (err, result) => {
        if(err) throw err;

        console.log(`\n`)
        console.table(result)
        console.log(`\n`)

        mainMenu()
    })
}

function addDept() {
    inquirer.prompt([
        {
            message: "What is your new Department?",
            name: "newDept",
            type: 'input'
        }
    ]).then(({newDept}) => {
        const queryStr = `
        INSERT INTO department (name)
        VALUES (?)`

        db.query(queryStr, [newDept], (err, result) => {
            if(err)throw err;
            console.log(result)

            mainMenu()
        })
    })
}

function viewAllEmployees() {
    const queryStr = `
    SELECT *
    FROM employee`

    db.query(queryStr, (err, result) => {
        if(err) throw err;

        console.log(`\n`)
        console.table(result)
        console.log(`\n`)

        mainMenu()
    })
}

function addEmployee() {

    inquirer.prompt([
        {
            message: "What is your new Employees first name?",
            name: "first_name",
            type: 'input'
        },
        {
            mesage: "What is your new Employees last name?",
            name: "last_name",
            type: 'input'
        },
        {
            message: "What is your new employees role?",
            name: "newRole",
            type: 'list',
            choices: ['Project Manager', 'Program Manager', 'Junior Engineer', 'Senior Engineer', 'Account Executive', 'Senior Account Executive', 'Director of Technology', 'CEO']
        },
        
    ]).then(({newEmployee}) => {
        const queryStr = `
        INSERT INTO employee (name)
        VALUES (?)`

        db.query(queryStr, [newEmployee], (err, result) => {
            if(err)throw err;
            console.log(result)

            mainMenu()
        })
    })
}

function viewAllRoles() {
    const queryStr = `
    SELECT *
    FROM role`

    db.query(queryStr, (err, result) => {
        if(err) throw err;

        console.log(`\n`)
        console.table(result)
        console.log(`\n`)

        mainMenu()
    })
}

function addRole() {
    inquirer.prompt([
        {
            message: "What is your new role?",
            name: "newDept",
            type: 'input'
        }
    ]).then(({newRole}) => {
        const queryStr = `
        INSERT INTO department (name)
        VALUES (?)`

        db.query(queryStr, [newRole], (err, result) => {
            if(err)throw err;
            console.log(result)

            mainMenu()
        })
    })
}
const inquirer = require("inquirer");
const mysql = require('mysql2');

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
            name: "firstName",
            type: 'input'
        },
        {
            mesage: "What is your new Employees last name?",
            name: "lastName",
            type: 'input'
        },
        {
            message: "What is your new employees role? Select the appropriate number",
            name: "newRole",
            type: 'list',
            choices: ['1', '(2) Program Manager', '(3) Junior Engineer', '(4) Senior Engineer', '(5) Account Executive', '(6) Senior Account Executive', '(7) Director of Technology', '(8) CEO']
        },
        
    ]).then(({newEmployee}) => {
        const queryStr = `
        INSERT INTO employee
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
            name: "newRole",
            type: 'input'
        }
    ]).then(({newRole}) => {
        const queryStr = `
        INSERT INTO role (name)
        VALUES (?)`

        db.query(queryStr, [newRole], (err, result) => {
            if(err)throw err;
            console.log(result)

            mainMenu()
        })
    })
}

function updateEmployeeRole() {

    inquirer.prompt([
       {
            message: ""
       },
        
    ]).then(({updatedEmployee}) => {
        const queryStr = `
        UPDATE employee
        SET (?)
        WHERE (?)`

        db.query(queryStr, [updateEmployee], (err, result) => {
            if(err)throw err;
            console.log(result)

            mainMenu()
        })
    })
}
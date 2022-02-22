const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selector',
            message: 'What would you do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }]).then(({selector}) => {
            if(selector === "View All Employees") {
                // some action
            } else if (selector === "Add Employee") {
                // some action
            } else if (selector === "Update Employee Role") {
                // some action
            } else if (selector === "View All Roles") {
                // some action
            } else if (selector === "Add Role") {
                // some action
            } else if (selector === "View All Departments") {
                // some action
            } else if (selector === "Add Department") {
                // some action
            } else if (selector === "Quit") {
                return
            }
        })
    }

 

module.exports = Inquirer;
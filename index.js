const mysql = require('mysql2');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

function start() {
    inquirer.createPrompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choice: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Update employee role', 'Exit'],
    }).then(function (answer) {
        switch(answer.action) {
            case 'View all departments':
                viewDepartment();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Update employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                connection.end();
                break;
               default:
                break;         
        }
    }); 
} 

start ();
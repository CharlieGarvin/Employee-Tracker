const mysql = require('mysql2');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Haggard4517!',
    database: 'employees_db'
},
    console.log('connected to database')
);

function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add an employee", "Add a department", "Add a role", "Update employee role", "Exit"],
    }).then(function (answer) {
        switch(answer.action) {
            case "View all departments":
                viewDepartment();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Update employee role":
                updateEmployeeRole();
                break;
            case "Exit":
                connection.end();
                break;
               default:
                break;         
        }
    }); 
} 

const viewDepartment = () => {
    let query = "SELECT * FROM department";

    connection.query(query, function(err, res) {
        if (err) throw (err);
        console.table(res);
        start();
    });
};

const viewRoles = () => {
    let query = "SELECT role.title, role.salary, role.id, department.name FROM role RIGHT JOIN department ON role.department_id = department.id";

    connection.query(query, function(err, res) {
        if (err) throw (err);
        console.table(res);
        start();
    });
};

const viewEmployees = () => {
    let query = "SELECT t1.first_name, t1.last_name, t2.first_name AS manager FROM employee t1 INNER JOIN employee t2 ON t1.manager_id = t2.id";
    // let query = "SELECT first_name, last_name, id, manager_id FROM employee ORDER BY last_name";

    connection.query(query, function(err, res) {
        if (err) throw (err);
        console.table(res);
        start();
    });
};

const addEmployee = () => {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "first name?",
        },
        {
            name: "lastName",
            type: "input",
            message: "last name?",
        },
        {
            name: "managerId",
            type: "input",
            message: "manager Id?",
        },
        {
            name: "addRole",
            type: "list",
            choices: function () {
                return res.map((role) => ({ name: role.title, value: role.id }));
            },
            message: "first name?",
        },
      ]);
    });

    // connection.query(query, function(err, res) {
    //     if (err) throw (err);
    //     console.table(res);
    //     start();
    // });
};

start ();
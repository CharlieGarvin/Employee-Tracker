const mysql = require('mysql2');
const inquirer = require('inquirer');

const connections = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employees_db'
});


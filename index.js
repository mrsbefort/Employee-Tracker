
const inquirer = require('inquirer');
const db = require('./db/connection');
const express = require('express');

// db.connect(async function () {
//     start();
// })

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add New Employee',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ]
    )
        .then((answer) => {
            switch (answer.choice) {
                
                case 'View Employees':
                    
                    viewEmployees();
                    break;
                case 'View Roles':

                    viewRoles();
                    break;
                case 'View Departments':

                    viewDepartments();
                    break;
                case 'Add New Employee':

                    newEmployee();
                    break;
                case 'Add Role':

                    newRole();
                    break;

                case 'Add Department':

                    addDepartment();
                    break;

                case 'Quit':

                    Quit();
                    break;
            }

        }

        )
}

function viewEmployees() {
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
      if (err) throw err;
      console.log("Viewing All Employees");
      console.table(res);
      start();
    }) 
  };

function viewRoles() {
    let request = "SELECT * FROM role";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Roles");
        console.table(res);

        start()
    })
}
function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        
        start()
    })
}

function newEmployee() {
    console.log('oy')
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter employee first name.',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'Enter employee last name.',
            name: 'last_name'
        },
        {
            type: 'input',
            message: 'Enter role ID number',
            name: 'role_id'
        },
        {
            type: 'input',
            message: 'Enter thier managers ID',
            name: 'manager_id'
        }
    ])
    .then(function (response) {
        db.promise().query('INSERT INTO employees SET ?', response).then(function (result) {
            console.log("employee added!");
            start()
        })
    })
}
function newRole() {
    console.log('oy')
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter title.',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter salary.',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Enter department id',
            name: 'department_id'
        },
    
    ])
    .then(function (response) {
        db.promise().query('INSERT INTO role SET ?', response).then(function (result) {
            console.log("role added!");
            start()
        })
    })
}

function addDepartment() {
    console.log('oy')
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter department.',
            name: 'name'
        },

    
    ])
    .then(function (response) {
        db.promise().query('INSERT INTO department SET ?', response).then(function (result) {
            console.log("role added!");
            start()
        })
    })
}
function Quit() {
    console.log('Goodbye!');
    process.exit();
    
}

start()
DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
  id INTEGER NOT NULL,
  name varchar(30),
);

CREATE TABLE role (
    id INTEGER NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INTEGER NOT NULL, 
);

CREATE TABLE employee (
    id INTEGER NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
)
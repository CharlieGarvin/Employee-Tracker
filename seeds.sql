USE employees_db;

INSERT INTO department (name) VALUES
('Tech'),
('Human Resources'),
('Finance'), 
('Managment');

INSERT INTO role (title, salary, department_id) VALUES
('Web Developer', 90000, 1),
('Accountant', 75000, 3),
('Manager', 80000, 4),
('Paralegal', 60000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Smith', 1, 4),
('Kevin', 'Ebanks', 2, 3),
('Dalton', 'Johnson', 3, 2),
('Stacy', 'Weber', 4, 1);
USE employees_db;

INSERT INTO department (name) VALUES
('Sales'),
('Human Resources'),
('Finance'), 
('Security');

INSERT INTO role (title, salary, department_id) VALUES
('Web Developer', 90000, 1),
('Accountant', 75000, 2),
('Manager', 80000, 3),
('Paralegal', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Smith', 1, 4),
('Kevin', 'Ebanks', 2, 3),
('Dalton', 'Johnson', 3, 2),
('Stacy', 'Weber', 4, 1);
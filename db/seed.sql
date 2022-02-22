-- department

USE TABLE department
INSERT INTO department (id, name)
VALUES (1, 'Project Management'),
       (2, 'Engineering'),
       (3, 'Sales'),
       (4, 'C-Suite');

-- role
USE TABLE role
INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Project Manager', 30000, 1),
       (2, 'Program Manager', 40000, 1),
       (3, 'Junior Engineer', 35000, 2),
       (4, 'Senior Engineer', 50000, 2),
       (5, 'Account Executive' 40000, 3),
       (5, 'Senior Account Executive', 50000, 3),
       (6, 'Director of Technology', 70000, 4),
       (7, 'CEO', 100000, 4),

--

USE TABLE employee
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)

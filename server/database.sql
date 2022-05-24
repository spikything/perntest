-- To set up the project, log into your PostgreSQL CLI and do:
CREATE DATABASE perntodo;

-- Then connect to this database with: \c perntodo
-- Now create the todo table like so:
CREATE TABLE todo(todo_id SERIAL PRIMARY KEY, description VARCHAR(255));
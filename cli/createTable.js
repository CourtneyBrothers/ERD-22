	
const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");
const empData = JSON.parse(readFileSync("./employees.json"));
	
let db = new sqlite3.Database('../bangazon.sqlite');


db.run(`DROP TABLE IF EXISTS employees`);
//TODO: run (supervisor) insert ${supervisor}"

db.run(
  `CREATE TABLE IF NOT EXISTS employees (
    emp_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    FOREIGN KEY (dept_id) REFERENCES dept(dept_id)
  )`,
  () => {
    empData.forEach(({ first_name, last_name, supervisor, dept_id, customer_id }) => {
      db.run(`INSERT INTO employees VALUES (
        ${null},
        "${title}",
        "${price}",
        ${dept_id}
      )`);
    });
  }
);
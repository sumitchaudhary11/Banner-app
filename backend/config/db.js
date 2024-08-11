const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Use environment variables for sensitive info
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 // Default port if not specified

});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = db;

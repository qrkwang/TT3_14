const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-05.cleardb.net",
  user: "bde1a43cc47feb",
  password: "fb3e5e7f",
  database: "heroku_7fde18e2d2f00b4",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;



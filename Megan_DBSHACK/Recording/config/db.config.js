// const { createPool } = require("mysql");
// /** Connection pool creation - START */
// const db = createPool({
//   port: 3306,
//   host: "us-cdbr-east-05.cleardb.net",
//   user: "bde1a43cc47feb",
//   password: "fb3e5e7f",
//   database: "heroku_7fde18e2d2f00b4",
//   connectionLimit: 10,
// });
// /** Connection pool creation - END */

// module.exports = db;


const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-05.cleardb.net",
  user: "bf1674ed7d855e",
  password: "2ef6a7c0",
  database: "heroku_2b8f98d924d3667",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;
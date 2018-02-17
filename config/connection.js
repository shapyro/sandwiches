var mysql = require("mysql"); 
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnectio(nprocess.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "burgers_db"
  });
}

connection.connect();
module.exports = connection;
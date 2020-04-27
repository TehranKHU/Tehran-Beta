const mysql = require('mysql');

// Connect to MySQL Database
var database = mysql.createConnection(require('../../config/keys').mysqlURI);

database.connect((err) => {
	if (err) {
		console.error('Cannot Connect to Database !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
	} else {
		console.log('Successfully Connected to MySQL Database !');
	}
});

module.exports = database;

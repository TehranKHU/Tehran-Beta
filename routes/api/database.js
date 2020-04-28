const mysql = require('mysql');
const config = require('config');

// Connect to MySQL Database
var database = mysql.createConnection(config.get('mysqlURI'));

database.connect((err) => {
	if (err) {
		console.error(
			'Cannot Connect to Database !' +
				'\n' +
				'Error: ' +
				JSON.stringify(err, undefined, 4)
		);
	} else {
		console.log('Successfully Connected to MySQL Database !');
	}
});

module.exports = database;

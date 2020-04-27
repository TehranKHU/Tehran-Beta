const errorHandler = (message, error) => {
	console.error(
		message + '\n' + 'Error: ' + JSON.stringify(error, undefined, 4)
	);
};

module.exports = errorHandler;

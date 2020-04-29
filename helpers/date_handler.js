const getCurrentDate = () => {
	date = new Date();

	return (
		date.getFullYear() +
		'-' +
		makeTwoDigits(date.getMonth() + 1) +
		'-' +
		makeTwoDigits(date.getDate())
	);
};

const makeTwoDigits = (digit) => {
	if (0 <= digit && digit <= 9) return '0' + digit.toString();
	if (-9 <= digit && digit <= 0) return '-0' + (-digit).toString();
	return digit.toString();
};

module.exports = getCurrentDate;

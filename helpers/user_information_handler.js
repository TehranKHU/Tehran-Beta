const remapUserColumns = (userInfo) => {
	console.log('--> remapUserColumns --> userInfo --> ', userInfo);

	return {
		firstName        : userInfo.first_name,
		lastName         : userInfo.last_name,
		username         : userInfo.username,
		email            : userInfo.email,
		isEmailConfirmed : userInfo.is_email_confirmed,
		avatar           : userInfo.avatar,
		studentCode      : userInfo.student_code,
		major            : userInfo.major,
		joinDate         : userInfo.join_date,
		birthDate        : userInfo.birth_date
	};
};

module.exports = remapUserColumns;

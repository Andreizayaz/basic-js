const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	const trueDataType = {}.toString.call(date).replace('[','').replace(']','').split(' ').pop();

	if (date == null) return 'Unable to determine the time of year!';

	if(!date instanceof Date)  throw new Error(); 

	if(trueDataType!== 'Date') throw new Error();

	if (date.getMonth() === 11 || date.getMonth() <= 1) return 'winter';
	if (date.getMonth() >= 2 && date.getMonth() <= 4) return 'spring';
	if (date.getMonth() >= 5 && date.getMonth() <= 7) return 'summer';
	if (date.getMonth() >= 8 && date.getMonth() <= 10) return 'autumn';
};
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof sampleActivity !== 'string' || sampleActivity==null ||
	isNaN(sampleActivity) || +sampleActivity==0 ||
	sampleActivity>HALF_LIFE_PERIOD ||
	sampleActivity <1 ||
	sampleActivity>15) return false;
	
	const logNumber = Math.log(MODERN_ACTIVITY/sampleActivity);
	const k = .693/HALF_LIFE_PERIOD;
	
	const result = Math.ceil(logNumber/k);

	return result;
};

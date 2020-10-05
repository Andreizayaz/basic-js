const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw new Error();

	let pauseIterate;
	let transformArr = Array.from(arr);
	for (let i = 0; i < transformArr.length; i++) {

		if (transformArr[i] === '--discard-next') {
			if (transformArr[i + 2] === '--discard-prev' ||
				transformArr[i + 2] === '--double-prev') {
				transformArr.splice(i + 2, 1);
			}

			if (transformArr[i + 1] !== undefined) {
				transformArr.splice(i, 2);
			} else {
				transformArr.splice(i, 1);
			}

			i -= 1;
		}

		if (transformArr[i] === '--discard-prev') {
			if (transformArr[i - 1] !== undefined) {
				transformArr.splice(i - 1, 2);
			} else {
				transformArr.splice(i, 1);
			}

			i -= 1;
		}

		if (transformArr[i] === '--double-next') {
			if (transformArr[i + 1] !== undefined) {
				transformArr[i] = transformArr[i + 1]
			} else {
				transformArr.splice(i, 1);
			}
		}

		if (transformArr[i] === '--double-prev') {
			if (transformArr[i - 1] !== undefined) {
				transformArr[i] = transformArr[i - 1]
			} else {
				transformArr.splice(i, 1);
			}
		}
	}

	return transformArr;


}
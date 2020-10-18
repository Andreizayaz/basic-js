const CustomError = require("../extensions/custom-error");

//let counter = 1;
module.exports = class DepthCalculator {

	calculateDepth(arr, counter = 1) {
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				return counter + this.calculateDepth(arr[i]);
			}
		}
		return counter;
	};
};
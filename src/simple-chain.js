const CustomError = require("../extensions/custom-error");

const chainMaker = {
	simpleChain: [],

	getLength() {
		return this.simpleChain.length;
	},

	addLink(value) {
		if (value === '' || value === undefined) {
			this.simpleChain.push(`( )`);
			return this;
		}
		this.simpleChain.push(`( ${value} )`);
		return this;
	},

	removeLink(position) {
		if (typeof position !== 'number' ||
			position % 1 !== 0 || position < 0 ||
			position > this.simpleChain.length - 1) {
			this.simpleChain = [];
			throw new Error();
		}
		let removePosition = position - 1;
		this.simpleChain.splice(removePosition, 1);
		return this;
	},

	reverseChain() {
		this.simpleChain.reverse();
		return this;
	},

	finishChain() {
		let finishSimpleChain = this.simpleChain;
		this.simpleChain = [];
		return finishSimpleChain.join('~~');
	}
};

module.exports = chainMaker;
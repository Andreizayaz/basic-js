const CustomError = require("../extensions/custom-error");

const chainMaker = {
	getLength() {
		let objLength = 0;
		for (key in this) {
			if (key === 'getLength' || key === 'addLink' ||
				key === 'removeLink' || key === 'reverseChain' ||
				key === 'finishChain') continue;
			objLength++;
		}
		return objLength;
	},

	addLink(value) {
		let numberKey = this.getLength();
		numberKey++;

		if (!value) {
			this[numberKey] = '( )';
			return this;
		}
		this[numberKey] = value;
		return this;
	},

	removeLink(position) {
		if (typeof position !== 'number' || position % 1 !== 0 || position < 0 || position > this.getLength()) {
			throw new Error();
		}
		delete this[position];
		return this;
	},

	reverseChain() {
		//chainMaker = Object.keys(this).reverse();
		return this;
	},

	finishChain() {
		let str = '';
		let counter = 1;
		let objectLength = this.getLength();
		for (let key in this) {
			if (key === 'getLength' || key === 'addLink' ||
				key === 'removeLink' || key === 'reverseChain' ||
				key === 'finishChain') continue;
			if (objectLength === 0) {
				str += '( )';
				return str;
			}
			if (counter === objectLength) {
				str += `( ${this[key]} )`;
				return str;
			}

			str += `( ${this[key]} )~~`;
			counter++;
		}
		return str;
	}
};

module.exports = chainMaker;
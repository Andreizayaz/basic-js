const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix) {
	let count = 0;
	for(let insideArray of matrix){
	  for(let j of insideArray){
	   if(j==="^^") count+=1;
	  }
	}
	
	return count;
};

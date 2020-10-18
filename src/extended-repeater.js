const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, args) {
	//str = str.toString();
	let resultStr = '';
	if(args.additionSeparator!==undefined) args.additionSeparator = args.additionSeparator.toString();
	
	/*if(typeof args.repeatTimes !== 'number' 
	  && typeof args.additionRepeatTimes !== 'number') throw new Error();*/
  
	  args.separator = args.separator || '+';
	  args.additionSeparator=args.additionSeparator || '|';
  
	  //if(args.repeatTimes === undefined) return resultStr = str;
  
	  for (let i = 1; i <= args.repeatTimes; i++) {
		  resultStr+=str;
		  for (let j = 0; j < args.additionRepeatTimes; j++) {
			  resultStr+=args.addition;
			  if(j<args.additionRepeatTimes-1) resultStr+=args.additionSeparator;
		  }
		  
		  if(i<args.repeatTimes)resultStr+=args.separator;
	  }
  
	  if(args.repeatTimes===undefined){
		  resultStr+=str;
		  for (let j = 0; j < args.additionRepeatTimes; j++) {
			  resultStr+=args.addition;
			  if(j<args.additionRepeatTimes-1) resultStr+=args.additionSeparator;
		  }
		  if(args.additionRepeatTimes===undefined) resultStr+=args.addition;
	  }
  
	  return resultStr;
};
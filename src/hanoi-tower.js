const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let objHanoi = {};
  objHanoi.turns=Math.pow(2,disksNumber)-1;
  objHanoi.seconds = Math.floor(objHanoi.turns/(turnsSpeed/3600));
  return objHanoi;
};

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(!Array.isArray(members)) return false;

	let teamMemberName="";
   
	for (const name of members.sort()) {
		if (typeof name === "string") {
			teamMemberName+=name.trim()[0].toUpperCase();
		}
	}
   
	return teamMemberName.split('').sort().join('');
};

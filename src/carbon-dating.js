const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
	if(num instanceof Array || isNaN(parseFloat(num)) || num < 0 || num > MODERN_ACTIVITY || num === undefined || num === null){
		return false
	}
	let nub = num * 1
	if(num + 1 === nub + 1){
		return false
	}
	else{
	k = 0.693/HALF_LIFE_PERIOD;
	t = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(num)) / k);
	return t == Infinity ? false : t;
}
};

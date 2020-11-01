const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) {
        throw new Error();
    }
    let result = arr.slice();
	for (let i = 0; i < result.length; i++) {
		if (result[i] === '--discard-next') {
			result.splice(i, 2, undefined);
		} else if (result[i] === '--discard-prev') {
			if (i === 0) {
				result.splice(i, 1);
			} else {
				result.splice(i - 1, 2, undefined);
			}
		} else if (result[i] === '--double-next') {
			result.splice(i, 1, result[i + 1]);
		} else if (result[i] === '--double-prev') {
			result.splice(i, 1, result[i - 1]);
		}
	}
	result = result.filter((e) => e !== undefined);
	return result;
};

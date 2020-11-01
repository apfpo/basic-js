const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor (type) {
        this.reverseType = type === false;
    }
    encrypt (message, key) {
        if (message === undefined || key === undefined) throw new Error()
        let shift = 0;
        key = key.toUpperCase().split("").map(c => c.charCodeAt(0) - 65);
        message = message.toUpperCase().split("").map((item, i) => (/[A-Z]/.test(item))
                ? String.fromCharCode((item.charCodeAt(0) - 65 + key[(i - shift) % key.length]) % 26 + 65)
                : (shift++, item));

        return this.reverseType ? message.reverse().join("") : message.join("")
    }

    decrypt (message, key) {
        if (message === undefined || key === undefined) throw new Error()
        let shift = 0;
        key = key.toUpperCase().split("").map(c => c.charCodeAt(0) - 65);
        message = message.toUpperCase().split("").map((item, i) => (/[A-Z]/.test(item))
                ? String.fromCharCode((item.charCodeAt(0) - 65 + 26 - key[(i - shift) % key.length])
                        % 26 + 65)
                : (shift++, item));

        return this.reverseType ? message.reverse().join("") : message.join("");
    }
}
module.exports = VigenereCipheringMachine;

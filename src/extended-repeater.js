const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

   let res = ''
   if(options.repeatTimes == null) options.repeatTimes = 1;
   if(options.separator == null) options.separator = '+'
   if(options.addition == undefined) options.addition = ''
   if(options.additionSeparator == undefined) options.additionSeparator = '|'
   if(options.additionSeparator == null) options.additionSeparator = 'null'
   if (options.additionRepeatTimes == null) options.additionRepeatTimes = 1;

   for (let i = 0; i < options.repeatTimes; i++) {
      res += str;
      for (let j = 0;  j < options.additionRepeatTimes; j++) {
          res += options.addition + (j < options.additionRepeatTimes - 1 ? options.additionSeparator : "");
      }
      res += (i < options.repeatTimes - 1) ? options.separator : "";
  }
   return res;
};
  
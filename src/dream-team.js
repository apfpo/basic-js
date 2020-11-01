const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  members = members instanceof Array ?
  members.map((value) => {
      return typeof value === 'string' ? value.trim()[0] : '' 
  }).sort(function (a, b) {
  return a.localeCompare(b);
}).join('').toUpperCase() :
  false
  return members
};

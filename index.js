const _ = require("lodash");

const { users } = require("./data/data.json");

exports.searchByFName = function (fname) {
  return _.filter(users, (u) => u.firstName === fname);
};

exports.searchByGender = function (gender) {
  return _.filter(users, (u) => u.gender === gender);
};

exports.searchByAgeBT = function (age) {
  return _.filter(users, (u) => u.age > age);
};

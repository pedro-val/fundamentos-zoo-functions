const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => data.employees.reduce(((acc, cur) => {
  if (cur.firstName === employeeName || cur.lastName === employeeName) {
    acc = cur;
    return acc;
  }
  return acc;
}), {});

module.exports = getEmployeeByName;

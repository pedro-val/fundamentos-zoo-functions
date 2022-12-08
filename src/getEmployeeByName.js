const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => data.employees.reduce(((acc, cur) => {
  if (cur.firstName === employeeName || cur.lastName === employeeName) {
    let actual = acc;
    actual = cur;
    return actual;
  }
  return acc;
}), {});

module.exports = getEmployeeByName;

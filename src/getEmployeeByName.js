const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => data.employees.reduce(((acc, cur) => {
  if (cur.firstName === employeeName || cur.lastName === employeeName) {
    cur = acc;
    return acc;
  }
  return acc;
}), {});

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;

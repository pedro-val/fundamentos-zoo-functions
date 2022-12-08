const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      obj.child += 1;
    }
    if (pessoa.age >= 18 && pessoa.age < 50) {
      obj.adult += 1;
    }
    if (pessoa.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
};

const calculateEntry = (entrants = 0) => {
  if (entrants.length === 0 || Array.isArray(entrants) === false) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const seniors = obj.senior * data.prices.senior;
  const adults = obj.adult * data.prices.adult;
  const childs = obj.child * data.prices.child;
  const total = seniors + adults + childs;
  return total;
};

module.exports = { calculateEntry, countEntrants };

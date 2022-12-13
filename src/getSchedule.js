const data = require('../data/zoo_data');

const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const getDaysByAnimals = (parameter) => {
  const animal = data.species.find((especie) => especie.name === parameter);
  return animal.availability;
};

const getOneAnimal = (p) => {
  const obj = { [p]: {
    officeHour: '',
    exhibition: [],
  },
  };
  if (p === 'Monday') {
    obj[p].exhibition = 'The zoo will be closed!';
    obj[p].officeHour = 'CLOSED';
    return obj;
  }
  const filtered = data.species.filter((especie) =>
    especie.availability.includes(p) === true);
  filtered.forEach((filter) => {
    obj[p].exhibition.push(filter.name);
    obj[p].officeHour = `Open from ${data.hours[p].open}am until ${data.hours[p].close}pm`;
  });
  return obj;
};

const getAllAnimals = (p) => {
  const obj = {};
  p.forEach((dia) => Object.assign(obj, getOneAnimal(dia)));
  return obj;
};

const getSchedule = (p = 0) => {
  if (data.species.some((especie) => especie.name === p)) {
    return getDaysByAnimals(p);
  }
  if (dias.includes(p)) {
    return getOneAnimal(p);
  }
  return getAllAnimals(dias);
};

module.exports = getSchedule;

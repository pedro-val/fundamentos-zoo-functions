const data = require('../data/zoo_data');

const obj = {
  Tuesday: {
    officeHour: '',
    exhibition: [],
  },
  Wednesday: {
    officeHour: '',
    exhibition: [],
  },
  Thursday: {
    officeHour: '',
    exhibition: [],
  },
  Friday: {
    officeHour: '',
    exhibition: [],
  },
  Saturday: {
    officeHour: '',
    exhibition: [],
  },
  Sunday: {
    officeHour: '',
    exhibition: [],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const getDaysByAnimals = (parameter) => {
  const animal = data.species.find((especie) => especie.name === parameter);
  return animal.availability;
};

const getOneAnimal = (p) => {
  const newObj = { [p]: {
    officeHour: '',
    exhibition: [],
  },
  };
  if (p === 'Monday') {
    newObj[p].exhibition = 'The zoo will be closed!';
    newObj[p].officeHour = 'CLOSED';
    return newObj;
  }
  const filtered = data.species.filter((especie) =>
    especie.availability.includes(p) === true);
  filtered.forEach((filter) => {
    newObj[p].exhibition.push(filter.name);
    newObj[p].officeHour = `Open from ${data.hours[p].open}am until ${data.hours[p].close}pm`;
  });
  return newObj;
};

const getAnimals = (p) => {
  const filtered = data.species.filter((especie) =>
    especie.availability.includes(p) === true);
  filtered.forEach((filter) => {
    obj[p].officeHour = `Open from ${data.hours[p].open}am until ${data.hours[p].close}pm`;
    obj[p].exhibition.push(filter.name);
  });
  return obj;
};

const getSchedule = (p = 0) => {
  if (data.species.some((especie) => especie.name === p)) {
    return getDaysByAnimals(p);
  }
  if (dias.includes(p)) {
    return getOneAnimal(p);
  }
  dias.forEach((day) => getAnimals(day));
  return obj;
};

module.exports = getSchedule;

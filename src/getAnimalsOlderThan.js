const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const array = data.species.filter((especie) => especie.name === animal);
  return array[0].residents.every((residente) => residente.age > age);

};
getAnimalsOlderThan('lions', 20);

module.exports = getAnimalsOlderThan;

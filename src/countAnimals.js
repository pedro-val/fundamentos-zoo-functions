const data = require('../data/zoo_data');

const array = data.species;

const countAnimals = (animal = 'default') => {
  if (animal === 'default') {
    return array.reduce(((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }), {});
  }
  const unit = array.filter((especie) => especie.name === animal.species);
  const sexOn = unit[0].residents.filter((sexo) => sexo.sex === animal.sex);
  if (animal.sex) {
    return sexOn.length;
  }
  return unit[0].residents.length;
};

module.exports = countAnimals;

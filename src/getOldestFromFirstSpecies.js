const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const retorno = [];
  const array = data.employees;
  const laborer = array.find((empregado) => id === empregado.id);
  const firstAnimalId = laborer.responsibleFor[0];
  const animal = data.species.find((especie) => especie.id === firstAnimalId).residents;
  const one = animal.reduce((acc, cur) => {
    if (acc.age < cur.age) {
      let older = acc;
      older = cur;
      return older;
    }
    return acc;
  });
  retorno.push(one.name);
  retorno.push(one.sex);
  retorno.push(one.age);
  return retorno;
};

module.exports = getOldestFromFirstSpecies;

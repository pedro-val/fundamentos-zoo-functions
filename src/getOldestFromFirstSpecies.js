// Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.
// A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:
// A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;
// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;
// A função deverá encontrar o animal mais velho daquela espécie;
// A função deverá retornar um array com as informações do animal mais velho daquela espécie.

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

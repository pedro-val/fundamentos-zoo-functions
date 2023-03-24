// a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
// Os animais devem ter essa idade ou serem mais velhos.
// Retorne um valor booleano.

const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const array = data.species.filter((especie) => especie.name === animal);
  return array[0].residents.every((residente) => residente.age > age);
};
getAnimalsOlderThan('lions', 20);

module.exports = getAnimalsOlderThan;

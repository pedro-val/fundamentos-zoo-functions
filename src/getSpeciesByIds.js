const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  const retorno = [];
  ids.forEach((id) => {
    data.species.forEach((especie) => {
      if (especie.id === id) {
        retorno.push(especie);
      }
    });
  });
  return retorno;
};

module.exports = getSpeciesByIds;

// função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.
// Faça com que a função getSpeciesByIds possa receber vários parâmetros;
// Retorne um array vazio se a função não receber um id;
// Retorne as seguintes informações do arquivo data:
// Se a função receber apenas um id, retorne a espécie do animal referente a este id;
// Se a função receber vários ids, retorne todas as espécies referente a esses ids.
// O que será testado:
// A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;
// A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;
// A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs.

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

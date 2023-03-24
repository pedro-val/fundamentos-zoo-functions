// a função countAnimals que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.
// A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.
// Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:
//   {
//     lions: 4,
//     // [...]
//   }
// Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:
// ao receber o argumento { species: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;
// ao passar o argumento { species: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

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

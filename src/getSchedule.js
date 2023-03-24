// Implemente a função getSchedule que irá disponibilizar um cronograma com os horários de visita da semana disponíveis para cada espécie de animal.
// As informações dos horários dos animais devem ser disponibilizadas em uma consulta para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da semana, de um dia ou de um animal específico.
// Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo:
//  getSchedule('lions');
//  // o retorno será [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
// Retorne um objeto com todos os horários disponíveis para cada dia da semana caso a função não receba parâmetro ou o parâmetro passado para a função não seja um animal ou um dia.
// Para isso:
// Crie um objeto e adicione todos os dias da semana como chave;
// Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:
// officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;
// exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.
// O retorno deve ser parecido com esse:
// {
//   Tuesday: { // Dia da semana
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },
//   // [...]
// }

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

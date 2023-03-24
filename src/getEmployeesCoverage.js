// Implemente a função getEmployeesCoverage que deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.
// A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:
// name: o nome ou sobrenome da pessoa a ser buscada;
// id: o id da pessoa a ser buscada.
// A função deve retornar um objeto no seguinte formato:
// {
// id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
// fullName: "Sharonda Spry", // nome completo: firstName + lastName
// species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
// locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }
// Para isso:
// Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade name:
// a propriedade name pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras.
// Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade id;
// Retorne um array com as informações de todas as pessoas colaboradoras caso a função não receba parâmetro;
// Lance um erro caso o id seja inválido.

const data = require('../data/zoo_data');

const getAnimals = (ids) => {
  const animals = [];
  ids.forEach((id) => {
    const specie = data.species.filter((especie) => especie.id === id);
    animals.push(specie[0].name);
  });
  return animals;
};

const getAnimalLocations = (ids) => {
  const locations = [];
  ids.forEach((id) => {
    const especie1 = data.species.filter((especie) => especie.id === id);
    locations.push(especie1[0].location);
  });
  return locations;
};

const getPerson = (parameter) => {
  const obj = {};
  const id = data.employees.some((person) => person.id === parameter.id);
  if (id) {
    const employe = data.employees.find((pessoa) => pessoa.id === parameter.id);
    obj.id = employe.id;
    obj.fullName = `${employe.firstName} ${employe.lastName}`;
    obj.species = getAnimals(employe.responsibleFor);
    obj.locations = getAnimalLocations(employe.responsibleFor);
    return obj;
  }
  const employe = data.employees.find((pessoa) =>
    pessoa.firstName === parameter.name || pessoa.lastName === parameter.name);
  obj.id = employe.id;
  obj.fullName = `${employe.firstName} ${employe.lastName}`;
  obj.species = getAnimals(employe.responsibleFor);
  obj.locations = getAnimalLocations(employe.responsibleFor);
  return obj;
};

const verificacao = (parameter) => data.employees.some((person) => person.id === parameter.id)
   || data.employees.some((person) => person.firstName === parameter.name
   || person.lastName === parameter.name);

const getEmployeesCoverage = (parameter = 0) => {
  if (parameter === 0) {
    return data.employees.reduce(((acc, cur) => {
      const localizacao = getAnimalLocations(cur.responsibleFor);
      const especies = getAnimals(cur.responsibleFor);
      const obj = {
        id: cur.id,
        fullName: `${cur.firstName} ${cur.lastName}`,
        species: especies,
        locations: localizacao };
      acc.push(obj);
      return acc;
    }), []);
  }
  if (verificacao(parameter) === false) {
    throw new Error('Informações inválidas');
  }
  return getPerson(parameter);
};

module.exports = getEmployeesCoverage;

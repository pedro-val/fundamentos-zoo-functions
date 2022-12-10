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

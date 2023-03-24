// Faça o mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.
// A função getAnimalMap é responsável por categorizar os animais por localização, além de filtrá-los por região, nome e sexo a partir de um parâmetro. A estrutura do retorno da função é baseada na localização das espécies:
//   {
//     NE: [ /* dados aqui */],
//     NW: [/* dados aqui */],
//     SE: [/* dados aqui */],
//     SW: [/* dados aqui */],
//   }
// O parâmetro da função será um objeto que poderá conter:
// includeNames: true, que retorna o nome dos animais no seguinte formato:
// sorted: true que retorna o nome dos animais por ordem alfabética no seguinte formato:
// sex: male ou sex: female retorna o nome dos animais que são machos ou fêmeas no seguinte formato:
// Caso a função não receba parâmetro, as espécies dos animais devem ser categorizadas por localização e deve retornar um objeto no seguinte formato:
// Para isso:
// Retorne a espécie de todos os animais categorizados por localização caso a função:
// não receba parâmetro;
// não receba o parâmetro {includeNames: true} e receba apenas o parâmetro {sex: female};
// não receba o parâmetro {includeNames: true} e receba apenas o parâmetro {sex: female, sorted: true}.
// Retorne a espécie e o nome dos animais caso a função receba apenas o parâmetro {includeNames: true};
// Retorne a espécie e o nome dos animais em ordem alfabética caso a função receba o parâmetro {includeNames: true, sorted: true};
// Retorne a espécie e o nome dos animais filtrado por sexo:
// Retorne a espécie e o nome dos animais fêmeas, caso o parâmetro da função seja {includeNames: true, sex: female};
// Retorne a espécie e o nome dos animais machos, caso o parâmetro da função seja {includeNames: true, sex: male};
// Retorne a espécie e o nome dos animais filtrado por sexo e por ordem alfabética:
// Retorne a espécie e o nome dos animais fêmeas em ordem alfabética, caso o parâmetro da função seja {includeNames: true, sex: female, sorted: true};
// Retorne a espécie e o nome dos animais machos em ordem alfabética, caso o parâmetro da função seja {includeNames: true, sex: male, sorted: true};

const data = require('../data/zoo_data');

const ne = data.species.filter((specie) => specie.location.includes('NE'));
const nw = data.species.filter((specie) => specie.location.includes('NW'));
const se = data.species.filter((specie) => specie.location.includes('SE'));
const sw = data.species.filter((specie) => specie.location.includes('SW'));

const getSexNE = (p) => ne.reduce(((acc, cur) => {
  const temp = cur.residents.filter((individuo) =>
    individuo.sex === p.sex).map((e) => e.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getNamesNE = (p = 0) => ne.reduce(((acc, cur) => {
  const temp = cur.residents.map((individuo) => individuo.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getSexNW = (p) => nw.reduce(((acc, cur) => {
  const temp = cur.residents.filter((individuo1) =>
    individuo1.sex === p.sex).map((e) => e.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getNamesNW = (p = 0) => nw.reduce(((acc, cur) => {
  const temp = cur.residents.map((individuo1) => individuo1.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getSexSE = (p) => se.reduce(((acc, cur) => {
  const temp = cur.residents.filter((individuo2) =>
    individuo2.sex === p.sex).map((e) => e.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getNamesSE = (p = 0) => se.reduce(((acc, cur) => {
  const temp = cur.residents.map((individuo2) => individuo2.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getSexSW = (p) => sw.reduce(((acc, cur) => {
  const temp = cur.residents.filter((individuo3) =>
    individuo3.sex === p.sex).map((e) => e.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getNamesSW = (p = 0) => sw.reduce(((acc, cur) => {
  const temp = cur.residents.map((individuo3) => individuo3.name);
  const temp1 = {};
  if (p.sorted === true) {
    temp1[cur.name] = temp.sort();
    acc.push(temp1);
    return acc;
  }
  temp1[cur.name] = temp;
  acc.push(temp1);
  return acc;
}), []);

const getData = (p = 0) => {
  if (p.includeNames === undefined) {
    const obj = { NE: [],
      NW: [],
      SE: [],
      SW: [],
    };
    ne.forEach((e) => obj.NE.push(e.name));
    nw.forEach((e) => obj.NW.push(e.name));
    se.forEach((e) => obj.SE.push(e.name));
    sw.forEach((e) => obj.SW.push(e.name));
    console.log(obj);
    return obj;
  }
};

const returnNames = (p) => {
  const temp = {
    NE: getNamesNE(p),
    NW: getNamesNW(p),
    SE: getNamesSE(p),
    SW: getNamesSW(p),
  };
  return temp;
};

const returnSexNames = (p) => {
  const temp = {
    NE: getSexNE(p),
    NW: getSexNW(p),
    SE: getSexSE(p),
    SW: getSexSW(p),
  };
  return temp;
};

const getAnimalMap = (options = 0) => {
  if (options.includeNames === true && options.sex !== undefined) {
    return returnSexNames(options);
  }
  if (options.includeNames) {
    return returnNames(options);
  }
  return getData(options);
};

module.exports = getAnimalMap;

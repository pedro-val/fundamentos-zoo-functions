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

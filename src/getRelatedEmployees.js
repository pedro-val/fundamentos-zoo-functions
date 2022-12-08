const data = require('../data/zoo_data');

const isManager = (id) => {
  const empregados = data.employees;
  let boolean = false;
  empregados.forEach((empregado) => {
    if (empregado.managers.includes(id)) {
      boolean = true;
    }
  });
  return boolean;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const empregados = data.employees;
  const colaboradores = empregados.filter((empregado) => empregado.managers.includes(managerId));
  const retorno = [];
  colaboradores.forEach((nome) => {
    retorno.push(`${nome.firstName} ${nome.lastName}`);
  });
  return retorno;
};
module.exports = { isManager, getRelatedEmployees };

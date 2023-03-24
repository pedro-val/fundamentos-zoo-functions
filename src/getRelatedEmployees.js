// a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.
// Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
// A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:
// Deve retornar true se o id passado for de uma pessoa gerente;
// Deve retornar false se o id passado não for de uma pessoa gerente.
// A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:
// Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:
// Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
// Exemplo de output:
// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
// Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.

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

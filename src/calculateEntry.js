// Calcule o valor total da entrada dos visitantes do zoológico.
// O valor das entradas do zoológico é calculado a partir da faixa etária, onde:
// child: são pessoas menores de 18 anos;
// adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;
// senior: são pessoas com idade maior ou igual a 50 anos.
// Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de countEntrants e calculateEntry.
// As duas funções recebem um array no seguinte formato:
// const entrants = [
// { name:  'Lara Carvalho', age:  5 },
// { name:  'Frederico Moreira', age:  5 },
// { name:  'Pedro Henrique Carvalho', age:  5 },
// { name:  'Maria Costa', age:  18 },
// { name:  'Núbia Souza', age:  18 },
// { name:  'Carlos Nogueira', age:  50 },
// ];
// A função countEntrants será responsável por calcular a quantidade de visitantes por faixa etária:
// Ela recebe um array e deve retornar um objeto. Para isso:
// Realize a soma da quantidade de visitantes por faixa etária;
// Retorne um objeto em um formato como esse: { child: 3, adult: 2, senior: 1 }.
// A função calculateEntry será responsável por somar o valor da entrada das pessoas o zoológico:
// Ela recebe um array e deve retornar a soma total dos valores do ingresso. Para isso:
// Retorne 0 se nenhum parâmetro for passado ou seja um array vazio;
// Utilize a função countEntrants para ter a quantidade total de pessoas por faixa etária;
// Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: 187.94.

const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      obj.child += 1;
    }
    if (pessoa.age >= 18 && pessoa.age < 50) {
      obj.adult += 1;
    }
    if (pessoa.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
};

const calculateEntry = (entrants = 0) => {
  if (entrants.length === 0 || Array.isArray(entrants) === false) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const seniors = obj.senior * data.prices.senior;
  const adults = obj.adult * data.prices.adult;
  const childs = obj.child * data.prices.child;
  const total = seniors + adults + childs;
  return total;
};

module.exports = { calculateEntry, countEntrants };

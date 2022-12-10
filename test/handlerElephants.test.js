const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se parametro for indefinido, retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Se não for uma string retorna mensagem de que o parametro é inválido', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verificação da terceira condicional da função', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('verificação do id', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Se pedir um parametro inexistente retorna null', () => {
    expect(handlerElephants('cabeça')).toEqual(null);
  });
  it('Testando names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('testando count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testando averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});

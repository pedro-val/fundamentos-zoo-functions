const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('funcionalidade quando parametros normais', () => {
    expect(getOpeningHours('Friday', '7:00-PM')).toEqual('The zoo is open');
  });
  it('testando the zoo is closed', () => {
    expect(getOpeningHours('Monday', '11:00-PM')).toEqual('The zoo is closed');
  });
});

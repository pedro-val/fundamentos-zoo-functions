const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('funcionalidade quando parametros normais', () => {
    expect(getOpeningHours('Friday', '7:00-PM')).toEqual(open);
  });
  it('testando the zoo is closed', () => {
    expect(getOpeningHours('Monday', '11:00-PM')).toEqual(closed);
  });
  it('testando the zoo is closed outro dia da semana', () => {
    expect(getOpeningHours('Sunday', '11:00-PM')).toEqual(closed);
  });
  it('testando erro de dia da semana', () => {
    try {
      getOpeningHours('thu', '11:00-PM');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The day must be valid. Example: Monday');
    }
  });
  it('testando erro formato de AM PM', () => {
    try {
      getOpeningHours('Sunday', '11:00-ZM');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The abbreviation must be \'AM\' or \'PM\'');
    }
  });
  it('testando erro formato da data', () => {
    try {
      getOpeningHours('Sunday', 'testequalquercoisa');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The hour should represent a number');
    }
  });
  it('testando erro formato das horas', () => {
    try {
      getOpeningHours('Sunday', 'C9:00-AM');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The hour should represent a number');
    }
  });
  it('testando erro formato dos minutos', () => {
    try {
      getOpeningHours('Sunday', '09:c0-AM');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The minutes should represent a number');
    }
  });
  it('testando erro formato dos minutos alem de 60', () => {
    try {
      getOpeningHours('Sunday', '09:80-AM');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The minutes must be between 0 and 59');
    }
  });
  it('testando erro formato das horas além de 12', () => {
    try {
      getOpeningHours('Sunday', '15:40-AM');
    } catch (erroMsg) {
      expect(erroMsg.message).toEqual('The hour must be between 0 and 12');
    }
  });
  it('testando erro adicional', () => {
    expect(getOpeningHours('Friday', '12:00-PM')).toEqual(open);
  });
  it('testando função sem parametro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('testando erro adicional para horarios da madrugada', () => {
    expect(getOpeningHours('Friday', '01:00-AM')).toEqual(closed);
  });
});

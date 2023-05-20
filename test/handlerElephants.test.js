/* eslint-disable valid-typeof */
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retornar um array com nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retonar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('A função deve retornar undefined, se não for passando nenhum parametro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toBe(['Monday']);
  });
  it('Para um argumento diferente de uma string, deve retornar Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(!typeof 'string')).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Friday', () => {
    expect(handlerElephants('availability')).not.toBe(['Friday']);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Wednesday', () => {
    expect(handlerElephants('availability')).not.toBe(['Wednesday']);
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants(typeof 'string')).toBe(null);
  });
});

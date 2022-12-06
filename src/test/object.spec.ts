import { describe, expect, test } from '@jest/globals';

describe('Probando el Object', () => {
  beforeAll(() => {
    console.log('Corro aqui primero');
  });
  afterAll(() => {
    console.log('Corro esto al final');
  });

  beforeEach(() => {
    console.log('Aqui corro esto para antes de cada prueba');
  });

  afterEach(() => {
    console.log('Aqui corro esto despues de cada prueba');
  });

  test('Esta es una persona', () => {
    const person = { name: 'Carlos' };
    expect(person).toEqual({ name: 'Carlos' });
  });

  test('Esta es un Null', () => {
    const person = null;
    expect(person).toBeNull();
  });

  test('Esto es True', () => {
    expect(true).toEqual(true);
  });

  test('Esto es False', () => {
    expect(false).toEqual(false);
  });

  test('El 0 debe de existir en el Array', () => {
    const numeros = [0, 10, 2];
    expect(numeros).toContain(0);
  });
});

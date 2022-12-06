import { describe, expect, test } from '@jest/globals';
import { suma, resta } from './prueba';

//test('adds 1 + 2 to equal 3', () => {
//  expect(suma(1, 2)).toBe(3);
//});

describe('Modulo de suma', () => {
  test('la suma de 1 + 2 es 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
  test('la suma de 2 + 2 es 4', () => {
    expect(suma(2, 2)).toBe(4);
  });
  test('la suma de 5 + 5 es 10', () => {
    expect(suma(5, 5)).toBe(10);
  });
});

describe('Modulo de resta', () => {
  test('la Resta de 10 - 3 es 7', () => {
    expect(resta(10, 3)).toBe(7);
  });
  test('la Resta de 10 - 5 es 5', () => {
    expect(resta(10, 5)).toBe(5);
  });
  test('la Resta de 10 - 1 es 9', () => {
    expect(resta(10, 1)).toBe(9);
  });
});

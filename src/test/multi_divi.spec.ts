import { describe, expect, test } from '@jest/globals';
import { multi, divi } from './prueba';

describe('Em modulo de Multiplicar', () => {
  test('La multiplicacion de 10 * 5 es 50', () => {
    expect(multi(10, 5)).toBe(50);
  });
  test('La multiplicacion de 10 * 0 es 0', () => {
    expect(multi(10, 0)).toBe(0);
  });
  test('La multiplicacion de 10 * 2 es 20', () => {
    expect(multi(10, 2)).toBe(20);
  });
});

describe('En el modulo de dividir', () => {
  test('La division de 10 / 2 es : 5', () => {
    expect(divi(10, 2)).toBe(5);
  });
  test('La division de 10 / 5 es : 5', () => {
    expect(divi(10, 5)).toBe(2);
  });
  test('La division de 10 / 0 es : 0', () => {
    expect(divi(10, 0)).toBe(null);
  });
});

import { describe, expect, test } from '@jest/globals';
import { expo } from './prueba';

describe('Modulo de exponenciacion', () => {
  test('2 ** 2 es 4', () => {
    expect(expo(2, 2)).toBe(4);
  });
  test('3 ** 3 es 27', () => {
    expect(expo(3, 3)).toBe(27);
  });
  test('4 ** 2 es 16', () => {
    expect(expo(4, 2)).toBe(16);
  });
  test('5 ** 3 es 125', () => {
    expect(expo(5, 3)).toBe(125);
  });
});

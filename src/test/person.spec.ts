import { Person } from './person';

describe('Probar el modulo de Person', () => {
  test('Probando una persona que pese poco', () => {
    const persona = new Person('Juan', 45, 1.7);
    const imc = persona.calcularIMC();
    expect(imc).toBe('Esta Bajito');
  });

  test('Probando una persona que pese normal', () => {
    const persona = new Person('Carlos', 59, 1.7);
    const imc = persona.calcularIMC();
    expect(imc).toBe('Esta Normal');
  });
});

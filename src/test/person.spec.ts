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

  test('Probando una persona introdujo 0', () => {
    const persona = new Person('Carlos', 59, 0);
    const imc = persona.calcularIMC();
    expect(imc).toBe(null);
  });

  test('Probando una persona sobrepeso 1', () => {
    const persona = new Person('Carlos', 75, 1.7);
    const imc = persona.calcularIMC();
    expect(imc).toBe('Esta sobrePeso 1');
  });

  test('Probando una persona sobrepeso 2', () => {
    const persona = new Person('Carlos', 80, 1.7);
    const imc = persona.calcularIMC();
    expect(imc).toBe('Esta sobrePeso 2');
  });

  test('Probando una persona sobrepeso 3', () => {
    const persona = new Person('Carlos', 95, 1.7);
    const imc = persona.calcularIMC();
    expect(imc).toBe('Esta sobrePeso 3');
  });

  test('Probando una persona Muy sobrepeso', () => {
    const persona = new Person('Carlos', 200, 1.7);
    const imc = persona.calcularIMC();
    expect(imc).toBe('Esta muy sobrepeso');
  });
});

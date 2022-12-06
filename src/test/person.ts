export class Person {
  name: string;
  peso: number;
  altura: number;

  constructor(name: string, peso: number, altura: number) {
    this.name = name;
    this.altura = altura;
    this.peso = peso;
  }

  calcularIMC() {
    const result = Math.round(this.peso / (this.altura * this.altura));
    if (result < 0) {
      return null;
    }
    if (result >= 0 && result < 18) {
      return 'Esta Bajito';
    }
    if (result >= 18 && result < 24) {
      return 'Esta Normal';
    }
    if (result >= 25 && result < 26) {
      return 'Esta sobrePeso 1';
    }
    if (result >= 27 && result < 29) {
      return 'Esta sobrePeso 2';
    }
    if (result >= 30 && result < 40) {
      return 'Esta sobrePeso 3';
    }
    return 'Esta muy sobrepeso';
  }
}

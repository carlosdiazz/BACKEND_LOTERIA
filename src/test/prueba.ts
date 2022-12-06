//Funcion de Sumar
export const suma = (number_1: number, number_2: number) => number_1 + number_2;

//Funcion de Restar
export const resta = (number_1: number, number_2: number) =>
  number_1 - number_2;

//Funcion de Multiplicar
export const multi = (number_1: number, number_2: number) =>
  number_1 * number_2;

//Funcion de Dividir
export const divi = (number_1: number, number_2: number) => {
  if (number_2 === 0) {
    return null;
  }
  return number_1 / number_2;
};

//Funcion de Exponer
export const expo = (number_1: number, number_2: number) =>
  number_1 ** number_2;

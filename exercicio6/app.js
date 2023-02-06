import juros from "./Juros.js";

let aplicacao1 = new juros(10000, 0.07, 24);
let aplicacao2 = new juros(10000, 0.15, 10);

console.log(aplicacao1.calcularJurosSimples());
console.log(aplicacao2.calcularJurosCompostos());

import { Cachorro } from "./Animal.js";
import { Gato } from "./Animal.js";

const snoopy = new Cachorro("snoopy", 10);
console.log(
  `Nome do cachorro: ${snoopy.nome}, sua idade é: ${snoopy.idade}, e ele faz o som: ${snoopy.som}`
); //snoopy, 10 e auauau
const frajola = new Gato("frajola", 8);

console.log(
  `Nome do gato: ${frajola.nome}, sua idade é: ${frajola.idade}, e ele faz o som: ${frajola.som}`
); //frajola, 8 e miau

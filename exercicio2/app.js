import Fatura from "./Fatura.js";

const melao = new Fatura(123, "Melão", 2, 5);

const valor = melao.obterValorTotal();

console.log(melao);

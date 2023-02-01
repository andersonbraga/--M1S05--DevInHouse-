export default class Fatura {
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia;
    this.preco = preco;
    if (this.preco < 0) {
      this.preco = 0;
    }
    if (this.quantia < 0) {
      this.quantia = 0;
    }
  }
  obterValorTotal(valorTotal) {
    this.valorTotal = this.quantia * this.preco;
    return this.valorTotal;
  }
}

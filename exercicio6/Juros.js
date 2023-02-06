export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }
  calcularJurosSimples() {
    let C = this.capitalInicial;
    let i = this.taxaAplicada;
    let t = this.tempo;
    let J = C * i * t;
    return Math.round(C + J);
  }
  calcularJurosCompostos() {
    let C = this.capitalInicial;
    let i = this.taxaAplicada;
    let t = this.tempo;
    let M = C * (1 + i) ** t;
    return Math.round(M);
  }
}

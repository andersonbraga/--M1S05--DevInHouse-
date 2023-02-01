export class Personagem {
  percentualVida;
  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
  }
  sofreuDano(percentualDano) {
    if (this.percentualVida > 0) {
      this.percentualVida = this.percentualVida * 0.01 * percentualDano;
    }
    return 0;
  }
  usouKitMedico() {
    if (this.percentualVida < 100 && this.percentualVida > 0)
      this.percentualVida += 10;
  }
}

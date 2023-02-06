export class CalculadoraDeArea {
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }
  calcular() {
    if (this.tipo === "triangulo") {
      let triangulo = (this.base * this.altura) / 2;
      return triangulo;
    } else this.tipo === "quadrado";
    {
      let quadrado = this.base * this.altura;
      return quadrado;
    }
  }
}

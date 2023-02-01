export class Animal {
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
  }
}
export class Cachorro extends Animal {
  constructor(nome, idade, som) {
    super(nome, som, idade);
    this.nome = nome;
    this.idade = idade;
    this.som = "auaua";
  }
}
export class Gato extends Animal {
  constructor(nome, idade, som) {
    super(nome, som, idade);
    this.nome = nome;
    this.idade = idade;
    this.som = "MiaaaUuuu";
  }
}

export default class User {
  constructor(nome, role, ativo = true) {
    this.nome = nome; 
    this.role = role || 'estudante';
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.role}`;
  }
}

const novoUser = new User('Juliana', 'estudante');
console.log(novoUser.exibirInfos());



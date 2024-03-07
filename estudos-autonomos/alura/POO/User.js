export default class User {
    #nome; // atributo privado
    #role;
    #ativo;

  constructor(nome, role, ativo = true) { // instancia a classe com os atributos
    this.#nome = nome; // define qual atributo privado vai receber o valor do argumento
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  get nome() { // getter: para mostrar o atributo privado lá no admin.js
    return this.#nome; // nunca recebe argumento, apenas retorna o valor do atributo privado
  } // a chamada vai acessar a propriedade nome

  get role() { // tem que fazer um getter para cada atributo privado
    return this.#role; // responsabilidade única para evitar acoplamento
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) { // setter: para alterar o atributo privado
    if (novoNome === '') { // validação de dados
      throw new Error('Nome inválido'); // throw: lança um erro
    }
    this.#nome = novoNome; // recebe um argumento e altera o valor do atributo privado
  } // só aceita um argumento

  exibirInfos() {
    return `${this.nome}, ${this.role}`; // acessa os getters
  }
}





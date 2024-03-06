export default class User {
    #nome; // atributo privado
    #role;
    #ativo;

  constructor(nome, role, ativo = true) {
    this.#nome = nome;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  #montarObjetoUser() { // método privado
    return {
      nome: this.#nome,
      role: this.#role,
      ativo: this.#ativo,
    };
  }

  exibirInfos() {
    const objetoUser = this.#montarObjetoUser(); // chamando método privado
    return `${objetoUser.nome}, ${objetoUser.role}`; // acessando atributos privados
  }
}





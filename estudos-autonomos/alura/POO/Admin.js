// herança
import User from './User.js';

export default class Admin extends User {
    constructor(nome, role = 'admin', ativo = true) {
        super(nome, role, ativo);
    }

    // polimorfismo: método com o mesmo nome da classe pai, mas com comportamento diferente na classe filho
    exibirInfos() { // mantém a mesma assinatura do método da classe pai
        return `${this.nome}`; //só muda o comportamento interno
      }

    nomeDoAdmin() { // vai precisar de um método acessor para acessar o atributo privado
        return this.nome; // preciso de uma "porta" para acessar: getters e setters
    } // esse getter precisa ser criado onde o atributo privado foi criado

    criarCurso(nomedoCurso, vagas) {
        return `Curso ${nomedoCurso} criado com ${vagas} vagas`;
    }
}
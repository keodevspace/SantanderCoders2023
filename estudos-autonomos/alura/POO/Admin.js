// herança
import User from './User.js';

export default class Admin extends User {
    constructor(nome, role = 'admin', ativo = true) {
        super(nome, role, ativo);
    }

    nomeDoAdmin() { // vai precisar de um método acessor para acessar o atributo privado
        return this.nome; // preciso de uma "porta" para acessar: getters e setters
    } // esse getter precisa ser criado onde o atributo privado foi criado

    criarCurso(nomedoCurso, vagas) {
        return `Curso ${nomedoCurso} criado com ${vagas} vagas`;
    }
}
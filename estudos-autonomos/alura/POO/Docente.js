import User from './User.js';
export default class Docente extends User {
    constructor(nome, role = 'docente', ativo = true) { // role docente é polimorfismo
        super(nome, role, ativo);
    }

    nomeDoDocente() { // vai precisar de um método acessor para acessar o atributo privado
        return this.nome; // preciso de uma "porta" para acessar: getters e setters
    } // esse getter precisa ser criado onde o atributo privado foi criado

   aprovarEstudantes(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`;
    }
}
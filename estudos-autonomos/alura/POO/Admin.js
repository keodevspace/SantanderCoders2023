// herança
import User from './User.js';

export class Admin extends User {
    constructor(nome, role = 'admin', ativo = true) {
        super(nome, role, ativo);
    }

    criarCurso(nomedoCurso, vagas) {
        return `Curso ${nomedoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Keo', 'admin');
console.log(novoAdmin.criarCurso('JS', 20));
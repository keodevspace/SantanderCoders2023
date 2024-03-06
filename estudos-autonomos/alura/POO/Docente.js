import User from './User.js';

class Docente extends User {
    constructor(nome, role = 'docente', ativo = true) {
        super(nome, role, ativo);
    }

   aprovarEstudantes(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`;
   }
}

const novoDocente = new Docente('Keo', 'docente');
console.log(novoDocente.aprovarEstudantes('Juliana', 'JS'));
console.log(novoDocente.exibirInfos());
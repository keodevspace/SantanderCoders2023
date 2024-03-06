import User from './User.js';
export default class Docente extends User {
    constructor(nome, role = 'docente', ativo = true) {
        super(nome, role, ativo);
    }

   aprovarEstudantes(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`;
   }
}
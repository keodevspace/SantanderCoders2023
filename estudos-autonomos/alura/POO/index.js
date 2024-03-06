// encapsulamento: atributos privados não podem ser acessados fora da classe, mas podemos criar metodos para acessar esses atributos

import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Zé', 'estudante');
console.log(novoUser.exibirInfos()); // mostra o objeto user

const novoAdmin = new Admin('Maria', 'admin');
console.log(novoAdmin.exibirInfos()); // mostra o objeto admin

const novoDocente = new Docente('João', 'docente');
console.log(novoDocente.exibirInfos()); // mostra o objeto docente
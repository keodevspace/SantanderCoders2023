// encapsulamento: atributos privados não podem ser acessados fora da classe, mas podemos criar metodos para acessar esses atributos

import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Marcelo Moreno', 'estudante');
console.log(novoUser.exibirInfos()); // mostra o objeto user

const novoAdmin = new Admin('Toró', 'admin');
console.log(novoAdmin.exibirInfos()); // mostra o objeto admin

const novoDocente = new Docente('Val Baiano', 'docente');

novoAdmin.nome = 'Rodnei'; // altera o nome do admin pq usei o setter
console.log(novoAdmin.exibirInfos()); // mostra o objeto admin com o nome alterado

// let pessoa = {
//     nome: 'João',
//     idade: 25,
//     endereco: {
//       rua: 'Rua A',
//       cidade: 'Cidade X',
//       estado: 'Estado Y'
//     }
//   };
  
//   // acessar e imprimir o nome da pessoa
  
//   console.log('O nome da pessoa é ' + pessoa.nome); // notação de ponto
//   console.log('A idade da pessoa é ' + pessoa["idade"]); // notação de colchetes
//   console.log('A rua da pessoa é ' + pessoa.endereco.rua + ', na cidade' + pessoa.endereco.cidade + ' no estado ' + pessoa.endereco.estado);

//   pessoa.idade = 26;

//   console.log('A idade da pessoa é ' + pessoa.idade)2;



let listaDeTarefas = [
  { descricao: 'Estudar JavaScript', concluida: false },
  { descricao: 'Fazer exercícios de JavaScript', concluida: true },
  { descricao: 'Praticar acesso a objetos', concluida: false }
];

for (let i = 0; i < listaDeTarefas.length; i++) {
  console.log(listaDeTarefas[i].descricao);
}

console.log('Tarefas concluídas:');

for (let i = 0; i < listaDeTarefas.length; i++) {
  if (listaDeTarefas[i].concluida) {
    console.log(listaDeTarefas[i].descricao);
  }
}

listaDeTarefas[1].concluida = false;
console.log('Estado da segunda tarefa alterado para não concluída.');

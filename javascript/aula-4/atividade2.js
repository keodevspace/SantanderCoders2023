// faça uma lista de alunos e depois usar o for in para imprimir os dados de cada aluno.

let alunos = [
    {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    },
    {
        nome: 'Maria',
        idade: 22,
        cidade: 'Rio de Janeiro'
    },
    {
        nome: 'José',
        idade: 30,
        cidade: 'Curitiba'
    }
];

for (let aluno in alunos) {
    console.log(alunos[aluno]);
}


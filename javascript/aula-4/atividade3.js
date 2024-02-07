// Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60. Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)

let numerosSorteados = [];

for (let i = 0; i < 6; i++) {
    let numero = Math.random() * 60;
    numerosSorteados.push(parseInt(numero));    
}

console.log(numerosSorteados);




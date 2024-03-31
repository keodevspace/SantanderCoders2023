/*
    Crie uma função chamada contarPalavrasRepetidas que recebe uma string como parâmetro e retorna um objeto contendo a contagem de cada palavra na string. 
    EXPLIQUE LINHA POR LINHA O QUE O CÓDIGO ESTÁ FAZENDO.
*/

function contarPalavrasRepetidas(frase) {
    let palavras = frase.split(' '); // cria um array de palavras separando a frase por espaços: 'O Sol é uma estrela.' => ['O', 'Sol', 'é', 'uma', 'estrela.']
    let contagem = {}; // cria um objeto vazio para armazenar a contagem de palavras: { O: 2, Sol: 2, é: 2, uma: 1, estrela.: 1, vital.: 1 }

    for (let i = 0; i < palavras.length; i++) { // itera sobre cada palavra do array
        if (contagem[palavras[i]]) { // se a palavra já existe no objeto de contagem: contagem['O'] => 2
            contagem[palavras[i]]++; // incrementa a contagem 
        } else { // se a palavra não existe no objeto de contagem
            contagem[palavras[i]] = 1; // adiciona a palavra ao objeto de contagem
        }
    }
    return contagem; // retorna o objeto de contagem
}

console.log(contarPalavrasRepetidas('O Sol é uma estrela. O Sol é vital.')); // { O: 2, Sol: 2, é: 2, uma: 1, estrela.: 1, vital.: 1 }


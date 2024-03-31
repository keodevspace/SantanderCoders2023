/*
    Faça um programa com uma função chamada 'somaImposto'.
    A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa 
    em porcentagem e custo, que é o custo de um item antes do imposto. 
    A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna o preco final do item ao consumidor
*/

function somaImposto(taxaImposto, custo) {
    return custo + (custo * (taxaImposto / 100));
}

console.log(somaImposto(10, 100)); // 110
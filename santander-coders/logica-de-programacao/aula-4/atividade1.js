//  Crie um algoritmo usando o for que leia uma lista.
//  Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
//  Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  Lista -> [1,2,3,4,5,6,7,8,9]
//  [2, 4, 6, 8] -> pares
//  [1, 3, 5, 7, 9] -> impares

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = [];
let impares = [];

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        pares.push(list[i]);
    } else {
        impares.push(list[i]);
    }
}

console.log(pares);
console.log(impares);


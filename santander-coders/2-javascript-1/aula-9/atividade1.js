//   Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
//   F(n) = F(n-1) + F(n-2)
//   Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo: 5.
//   5
//   Ex: 0, 1, 1, 2, 3, 5
// sem recursividade, com função

let initial = 5;

function fibonacci(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) array.push(0);
        else if (i == 1) array.push(1);
        else {
        array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
    }
    console.log(fibonacci(initial));
    
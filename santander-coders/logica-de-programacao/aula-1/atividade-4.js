// Crie um algoritmo que, dadas duas variáveis, valide se os seus valores são do number e então retorne a soma entre esses valores. Caso algum dos valores não for um número, faça a conversão deste.
// Se não for possível fazer a conversão, exiba uma mensagem de erro ao usuário.

let a = "one";
let b = 5;

if (typeof a === "number" && typeof b === "number") {
    console.log(isNan(a + b));
}
else if (typeof a === "string" && typeof b === "number") {
    console.log(isNaN(parseInt(a) + b));
}
else if (typeof a === "number" && typeof b === "string") {
    console.log(isNaN(a + parseInt(b)));
}

console.log("Erro: um dos valores não é um número.");

usar strigfy para converter number para string








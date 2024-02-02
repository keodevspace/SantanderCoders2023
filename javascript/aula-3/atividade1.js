// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.
// Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:
//     salários até R$ 1500,00 (incluindo) : aumento de 20%
//     salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
//     salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
//     salários de R$ 2000,00 em diante : aumento de 5% 
// Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

let salario = 1700;
let percentualAumento;
let valorAumento;

if (salario <= 1500) {
    percentualAumento = 20;
    valorAumento = salario * (percentualAumento / 100);
} else if (salario > 1500 && salario <= 1700) {
    percentualAumento = 15;
    valorAumento = salario * (percentualAumento / 100);
}
else if (salario > 1700 && salario <= 2000) {
    percentualAumento = 10;
    valorAumento = salario * (percentualAumento / 100);
}
else {
    percentualAumento = 5;
    valorAumento = salario * (percentualAumento / 100);
}

console.log(`Salário antes do reajuste: R$ ${salario}`);
console.log(`Percentual de aumento aplicado: ${percentualAumento}%`);
console.log(`Valor do aumento: R$ ${valorAumento}`);
console.log(`Novo salário, após o aumento: R$ ${salario + valorAumento}`);


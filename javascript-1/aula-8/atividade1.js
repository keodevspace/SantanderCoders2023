// Crie o script de uma calculadora, usando o conceito de funções de alta ordem

const calculadora = (operacao) => (a, b) => operacao(a, b);

const operacaoSoma = calculadora(soma);
const operacaoSubtracao = calculadora(subtracao);
const operacaoMultiplicacao = calculadora(multiplicacao);
const operacaoDivisao = calculadora(divisao);

console.log("Soma:", operacaoSoma(5, 3)); // Saída: 8
console.log("Subtração:", operacaoSubtracao(10, 4)); // Saída: 6
console.log("Multiplicação:", operacaoMultiplicacao(6, 2)); // Saída: 12
console.log("Divisão:", operacaoDivisao(10, 2)); // Saída: 5




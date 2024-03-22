// com recursividade
const calculadora = (operacao) => (a) => operacao(a);
const fatorial = (n) => n === 0 ? 1 : n * fatorial(n - 1);

const operacaoFatorial = calculadora(fatorial);

console.log("Fatorial de 5:", operacaoFatorial(5)); // Saída: 120
console.log("Fatorial de 6:", operacaoFatorial(6)); // Saída: 720


// sem recursividade
const fatorial2 = (n) => {
    let resultado = 1;
    for (let i = 1; i <= n; i++) resultado *= i;
    return resultado;
    
    }

const operacaoFatorial2 = calculadora(fatorial2);

console.log("Fatorial de 5:", operacaoFatorial2(5)); // Saída: 120

class Calculadora {
    constructor(numero1, operacao, numero2) {     
      if (typeof numero1 !== 'number' || typeof numero2 !== 'number' || typeof operacao !== 'string') { // se os argumentos não forem números ou a operação não for uma string
        throw new Error('Argumentos inválidos');
      }
  
      this.numero1 = numero1; // atribui os valores aos atributos
      this.operacao = operacao;
      this.numero2 = numero2;
    }
  
    calcular() {
      const operacoes = { // método para calcular as operações
        '+': (a, b) => a + b, 
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      };
  
      if (!operacoes.hasOwnProperty(this.operacao)) { // se a operação não existir no objeto
        throw new Error('Operação inválida');
      }
  
      return operacoes[this.operacao](this.numero1, this.numero2); // retorna o resultado da operação
    }
  }
  
  try {
    const calculadora = new Calculadora(10, '+', 5); // instancia um novo objeto
    const resultado = calculadora.calcular(); // chama o método calcular
    console.log(resultado); // 15
  
    const calculadora2 = new Calculadora(10, '%', 5); // instancia um novo objeto
    const resultado2 = calculadora2.calcular(); // Lança erro: Operação inválida
  } catch (error) { // captura o erro
    console.error(error.message); // mostra a mensagem de erro
  }
  
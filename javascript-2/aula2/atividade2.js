class Conta { 
    constructor(nomeTitular) { 
      if (nomeTitular.length < 4 || /\d/.test(nomeTitular)) { 
        throw new Error("Nome inválido: mínimo de 4 caracteres sem números");
      }
      
      this.nomeTitular = nomeTitular;
      this.contaAtiva = true;
      this.saldo = 0;
    }
  
    ativarConta() {
       if (!this.contaAtiva) { // Só ativa se estiver inativa
        this.contaAtiva = true; // Ativa a conta
        return true; // Retorna true para indicar que a operação foi realizada com sucesso
      }      
      return false; // Retorna false para indicar que a operação não foi realizada
    }
  
    inativarConta() {
      if (this.saldo === 0 && this.contaAtiva) { // Só inativa se estiver zerada e ativa
        this.contaAtiva = false; // Inativa a conta
        return true; // Retorna true para indicar que a operação foi realizada com sucesso
      }
      return false; // Retorna false para indicar que a operação não foi realizada
    }
  
    depositar(valor) {
      if (valor > 0 && this.contaAtiva) {
        this.saldo += valor;
        return true;
      }
      return false;
    }
  
    sacar(valor) {
      if (valor <= this.saldo && this.contaAtiva) { // Só saca se tiver saldo e a conta estiver ativa
        this.saldo -= valor;
        return true;
      }
      return false;
    }
  
    obterSaldo() {
      return this.saldo; // Retorna o saldo
    }
  }

  const contas = []; // Array para armazenar as contas

function criarConta(nome) { // Função para criar uma conta
  const contaEncontrada = contas.find( // Procura por uma conta com o mesmo nome
    (conta) => conta.nomeTitular === nome // Compara o nome do titular
  );
  if (contaEncontrada) {
    console.log(`Conta para ${nome} já existe!`);
    return;
  }
  try {
    const novaConta = new Conta(nome); // Cria uma nova conta
    contas.push(novaConta); // Adiciona a nova conta ao array
    console.log(`Conta para ${nome} criada com sucesso!`); 
  } catch (error) {
    console.log(`Erro ao criar conta: ${error.message}`);
  }
}

// Exemplos de criação de contas
criarConta("João Silva"); // Sucesso
criarConta("Maria Oliveira"); // Sucesso
criarConta("Ana123"); // Erro: nome inválido
criarConta("João Silva"); // Erro: conta já existe

// Exemplo de uso das funcionalidades da conta
const contaJoao = contas[0]; 
console.log(`Saldo inicial: R$${contaJoao.obterSaldo()}`); 
contaJoao.depositar(100);
console.log(`Saldo após depósito: R$${contaJoao.obterSaldo()}`);
contaJoao.sacar(50);
console.log(`Saldo após saque: R$${contaJoao.obterSaldo()}`);
contaJoao.inativarConta();
console.log(`Conta inativada: ${contaJoao.contaAtiva}`);


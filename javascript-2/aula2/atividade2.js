// REQUISITOS:

// O saldo deve ser inicializado com zero e o atributo contaAtiva como true;

// A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);

// O depositar e o sacar só poderão operar se tiver saldo disponível;

// A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;

// Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
// Faça uso de sua classe em um script;

// Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, só crie a conta caso não exista (dê feedback ao seu usuários sobre a criação ou não);


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
      if (!this.contaAtiva) {
        this.contaAtiva = true;
        return true;
      }
      return false;
    }
  
    inativarConta() {
      if (this.saldo === 0 && this.contaAtiva) {
        this.contaAtiva = false;
        return true;
      }
      return false;
    }
  
    depositar(valor) {
      if (valor > 0 && this.contaAtiva) {
        this.saldo += valor;
        return true;
      }
      return false;
    }
  
    sacar(valor) {
      if (valor <= this.saldo && this.contaAtiva) {
        this.saldo -= valor;
        return true;
      }
      return false;
    }
  
    obterSaldo() {
      return this.saldo;
    }
  }

  const contas = [];

function criarConta(nome) {
  const contaEncontrada = contas.find(
    (conta) => conta.nomeTitular === nome
  );
  if (contaEncontrada) {
    console.log(`Conta para ${nome} já existe!`);
    return;
  }
  try {
    const novaConta = new Conta(nome);
    contas.push(novaConta);
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


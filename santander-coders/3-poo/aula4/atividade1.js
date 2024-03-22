class Pessoa {
    constructor(nome = nome, idade = idade, cpf = cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    exibirDados() {
       return `${this.nome}`, `${this.idade}`, `${this.cpf}`;
    }
}

class Conta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
        this.contaAtiva = true;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo >= valor && this.contaAtiva) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    obterSaldo() {
        return this.saldo;
    }

    ativarConta() {
        this.contaAtiva = true;
    }

    inativarConta() {
        this.contaAtiva = false;
    }

    transferir(valor, contaDestino) {
        if (
            this.saldo >= valor &&
            this.contaAtiva &&
            contaDestino.contaAtiva
        ) {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            return true;
        } else {
            return false;
        }
    }
}

const pessoa1 = new Pessoa("João Silva", 30, "12345678900");
const conta1 = new Conta(pessoa1);

conta1.depositar(1000);

const conta2 = new Conta(new Pessoa("Maria Oliveira", 25, "98765432100"));
conta1.transferir(500, conta2);

console.log(`Saldo da conta 1: R$${conta1.obterSaldo()}`);
console.log(`Saldo da conta 2: R$${conta2.obterSaldo()}`);

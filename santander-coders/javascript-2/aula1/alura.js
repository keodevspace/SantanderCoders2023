const Cliente = {
    nome,
    cpf,
    email,
    saldo
    
}

const cliente1 = new Cliente ("José", 12345678900, "jose@email.com", 100)
const cliente2 = new Cliente ("Maria", 98765432100, "maria@email.com", 50)

const contaCorrenteCliente1 = new ContaCorrente()
contaCorrenteCliente1.agencia = 1001
contaCorrenteCliente1.cliente = cliente1    


console.log(cliente1)
console.log(cliente2)



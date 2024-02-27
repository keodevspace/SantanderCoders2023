# 4 pilares da orientação a objetos

- _ABSTRAÇÃO_ => simplificação da realidade
- _ENCAPSULAMENTO_ => proteção dos atributos e métodos de uma classe
- _HERANÇA_ => uma classe filha herda os atributos e métodos da classe pai
- _POLIMORFISMO_ => múltiplas formas

#### exemplos de abstração (classes)

```sh
class Pessoa {
     constructor(nome, idade) {
         this.nome = nome
         this.idade = idade
     }
     falar() {
         console.log(`Meu nome é ${this.nome}`)
     }
     andar() {
         console.log(`${this.nome} está andando`)
     }
 }
 let pessoa = new Pessoa("Fulano", 30)
 console.log(pessoa.nome)
 pessoa.falar()
 pessoa.andar()
```

#### exemplo de herança

```sh
class Animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    emitirSom() {
        console.log("Som do animal")
    }
}
class Cachorro extends Animal {
    latir() {
        console.log("Au au")
    }
}
class Gato extends Animal {
    miar() {
        console.log("Miau")
    }
}
let cachorro = new Cachorro("Rex", 3)
console.log(cachorro.nome)
cachorro.emitirSom()
cachorro.latir()
let gato = new Gato("Mingau", 2)
console.log(gato.nome)
gato.emitirSom()
gato.miar()
```

#### exemplos de polimorfismo

```sh
class Animal {
    emitirSom() {
        console.log("Som do animal")
    }
}
class Cachorro extends Animal {
    emitirSom() {
        console.log("Au au")
    }
}
class Gato extends Animal {
    emitirSom() {
        console.log("Miau")
    }
}
let cachorro = new Cachorro()
cachorro.emitirSom()
let gato = new Gato()
gato.emitirSom()
```

#### exemplos de encapsulamento

```sh
class Animal {
    #nome
    constructor(nome) {
        this.#nome = nome
    }
    get nome() {
        return this.#nome
    }
    set nome(nome) {
        this.#nome = nome
    }
}
let animal = new Animal("Rex")
console.log(animal.nome)
animal.nome = "Totó"
console.log(animal.nome)
```

# expressões utilizadas em POO

- `class` = estrutura para criar um objeto, um molde padrão; definição de características e comportamentos. Classes não têm valores, apenas estrutura, quem têm valores, quem possui estado são os objetos
- `objetos criados` = são entidades/instâncias que possuem o estado e comportamento
  `instância` = objeto criado a partir de uma classe
  ` atributos (propriedade)` = características do objeto
  `estados` = valores internos dos atributos em dt momento
  `métodos` = comportamentos do objeto

`3 formas de criar um objeto`
1 - objeto literal = _sh const obj = {}_
2 - função construtora = _function Obj() {}_
3 - classe = _class Obj {}_

` 3 formas de criar um atributo`
1 - dentro do construtor = _this.nome = nome_
2 - fora do construtor = _nome = nome_
3 - dentro do método = _this.nome = nome_

`3 formas de criar um método / constructor`
1 - função = _function nome() {}_
2 - arrow function = _nome = () => {}_
3 - método normal = nome() {}

`3 formas de criar um método get / set / static`
1 - _get nome() {}_
2 - _set nome() {}_
3 - _static nome() {}_

`3 formas de acessar um atributo`
1 - objeto.atributo
2 - objeto["atributo"]
3 - objeto[atributo]

`3 formas de acessar um método`
1 - _objeto.metodo()_
2 - _objeto["metodo"]()_
3 - _objeto[metodo]()_

# métodos mais comuns

`Object.keys(objeto)` = retorna as chaves do objeto
`Object.values(objeto)` = retorna os valores do objeto
`Object.entries(objeto)` = retorna as chaves e valores do objeto
`Object.assign(objeto, {novoAtributo: valor})` = adiciona um novo atributo ao objeto
`Object.freeze(objeto)` = congela o objeto, não permite alterações
`Object.seal(objeto)` = sela o objeto, não permite adicionar ou remover atributos
`Object.defineProperties(objeto, {atributo: {value: valor, writable: false}})` = define as propriedades do objeto
`Object.getOwnPropertyDescriptors(objeto)` = retorna as propriedades do objeto
`Object.getOwnPropertyDescriptor(objeto, "atributo")` = retorna a descrição do atributo
`Object.preventExtensions(objeto)` = previne a adição de novos atributos
`Object.isExtensible(objeto)` = verifica se é extensível
`Object.isFrozen(objeto)` = verifica se está congelado
`Object.isSealed(objeto)` = verifica se está selado
`Object.getPrototypeOf(objeto)` = retorna o protótipo do objeto
`Object.setPrototypeOf(objeto, novoPrototipo)` = define um novo protótipo
`Object.create(objeto)` = cria um novo objeto com base no objeto passado
`Object.getOwnPropertyNames(objeto)` = retorna as chaves do objeto
`Object.getOwnPropertySymbols(objeto)` = retorna os símbolos do objeto
`Object.is(objeto1, objeto2)` = verifica se os objetos são iguais
`Object.toString(objeto)` = retorna o tipo do objeto
`Object.valueOf(objeto)` = retorna o valor primitivo do objeto
`Object.hasOwnProperty(objeto, "atributo")` = verifica se o objeto possui o atributo

# palavras reservadas mais usadas

`this `= referência ao objeto que está sendo criado
`then `= executa uma função após a resolução de uma promessa
`super `= referência à classe pai
` extends` = herança
`static`= método que pertence à classe e não ao objeto
`get`= método que retorna um valor
`set`= método que modifica um valor
`new`= cria um novo objeto
`public`= acesso livre
`private`= acesso restrito
`protected`= acesso restrito a classes filhas
`construtor`= método especial que é chamado no momento da criação do objeto
`typeof`= retorna o tipo de dado
`instanceof`= verifica se um objeto é uma instância de uma classe
`delete`= deleta um atributo de um objeto
`in`= verifica se um atributo existe em um objeto
`for...in`= percorre as chaves de um objeto
`for...of`= percorre os valores de um objeto
`try...catch`= tratamento de erro
` throw` = lança um erro
`finally` = sempre é executado
`break` = interrompe a execução
`continue` = pula para a próxima iteração
`return` = retorna um valor
`async`= função assíncrona
`await `= espera a resolução de uma promessa
` import` = importa um módulo
`export` = exporta um módulo
`module` = módulo
`package` = pacote
` require` = requer um módulo
` exports` = exporta um módulo
`module.exports` = exporta um módulo
`__dirname` = diretório atual
`__filename` = nome do arquivo
`setTimeout` = executa uma função após um tempo
`setInterval` = executa uma função em intervalos regulares
`clearTimeout` = cancela o setTimeout
`clearInterval` = cancela o setInterval
`fetch` = busca dados de uma API
`JSON` = JavaScript Object Notation
`Math `= matemática
` Date` = data
`RegExp`= expressão regular
`String` = string
` Number` = número
`Boolean` = booleano
`Array`= array
`Object` = objeto
`Function` = função
`Promise` = promessa
`generator` = gera um valor
`yield` = retorna um valor
`hoisting` = elevação
`closure` = fechamento
`callback` = retorno de chamada
`event` = evento
`listener` = ouvinte
`handler` = manipulador
` middleware` = intermediário
`router` = roteador
` controller` = controlador
`model` = modelo
`view` = visualização
` template` = modelo
`component` = componente
`directive`= diretiva
`ervice` = serviço
`provider`= provedor
`factory` = fábrica
`singleton` = único
`dependency injection` = injeção de dependência
`transpiler` = transpilador
`polyfill` = preenchimento

# siglas mais usadas

`DOM` = Document Object Model
` BOM` = Browser Object Model
`AJAX `= Asynchronous JavaScript and XML
` REST` = Representational State Transfer
`API `= Application Programming Interface
`SPA` = Single Page Application
` SSR` = Server Side Rendering
`CSR` = Client Side Rendering
`JWT` = JSON Web Token
`MVC`= Model View Controller
`ORM` = Object Relational Mapping
`ODM` = Object Document Mapping
`TDD` = Test Driven Development
` BDD` = Behavior Driven Development
` CI` = Continuous Integration
` CD` = Continuous Deployment

#### exemplos de método get / set / static

```sh
class Animal {
    constructor(nome) {
        this.nome = nome
    }
    get nome() {
        return this._nome
    }
    set nome(nome) {
        this._nome = nome
    }
    static andar() {
        console.log("O animal está andando")
    }
}
```

#### exemplos de herança com super

```sh
class Animal {
    constructor(nome) {
        this.nome = nome
    }
}
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome)
        this.raca = raca
    }
}
let cachorro = new Cachorro("Rex", "Vira-lata")
console.log(cachorro.nome)
console.log(cachorro.raca)
```

#### exemplos de classes com herança

```sh
class Animal {
    constructor(nome) {
        this.nome = nome
    }
    emitirSom() {
        console.log("Som do animal")
    }
}
class Cachorro extends Animal {
    latir() {
        console.log("Au au")
    }
}
class Gato extends Animal {
    miar() {
        console.log("Miau")
    }
}
let cachorro = new Cachorro("Rex")
console.log(cachorro.nome)
cachorro.emitirSom()
cachorro.latir()
let gato = new Gato("Mingau")
console.log(gato.nome)
gato.emitirSom()
gato.miar()
```

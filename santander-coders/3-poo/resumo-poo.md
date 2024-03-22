# 4 pilares da orientação a objetos
- *ABSTRAÇÃO* => simplificação da realidade
- *ENCAPSULAMENTO* => proteção dos atributos e métodos de uma classe
- *HERANÇA* => uma classe filha herda os atributos e métodos da classe pai
- *POLIMORFISMO* => múltiplas formas
<br>

````encapsulamento````: atributos privados não podem ser acessados fora da classe, mas podemos criar metodos para acessar esses atributos`


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
````
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
````class```` = estrutura para criar um objeto, um molde padrão; definição de características e comportamentos. Classes não têm valores, apenas estrutura, quem têm valores, quem possui estado são os objetos
<br>
````objetos criados```` = são entidades/instâncias que possuem o estado e comportamento
<br>
````instância```` = objeto criado a partir de uma classe
<br>
````atributos (propriedade)```` = características do objeto
<br>
````estados```` = valores internos dos atributos em dt momento
<br>
````métodos```` = comportamentos do objeto
<br>
````hoisting````: não conseguimos alterar a ordem do codigo pq o js não entende a ordem de cima para baixo
<br>
<br>

### 3 formas de criar um objeto
```sh
const obj = {}
```
```sh
function Obj() {}
```
```sh
class Obj {}
```
<br>

### 3 formas de criar um atributo
```sh
this.nome = nome
```
```sh
nome = nome
```
```sh
this.nome = nome
```
<br>

### 3 formas de criar um método / constructor
```sh
function nome() {}
```
```sh
nome = () => {}
```
```sh
nome() {}
```
<br>

### 3 formas de criar um método get / set / static
```sh
get nome() {}
```
```sh
set nome() {}
```
```sh
static nome() {}
```
<br>

### 3 formas de acessar um atributo
```sh
objeto.atributo
```
```sh
objeto["atributo"]
```
```sh
objeto[atributo]
```
<br>

### 3 formas de acessar um método
```sh
objeto.metodo()
```
```sh
objeto["metodo"]()
```
```sh
objeto[metodo]()
```
<br>
<br>

# métodos mais comuns
````.keys(objeto)```` = retorna as chaves do objeto
<br>
````.values(objeto)```` = retorna os valores do objeto
<br>
````.entries(objeto)```` = retorna as chaves e valores do objeto
<br>
````.assign(objeto, {novoAtributo: valor})```` = adiciona um novo atributo ao objeto
<br>
````.freeze(objeto)```` = congela o objeto, não permite alterações
<br>
````.seal(objeto)```` = sela o objeto, não permite adicionar ou remover atributos
<br>
````.defineProperties(objeto, {atributo: {value: valor, writable: false}})```` = define as propriedades do objeto
<br>
````.getOwnPropertyDescriptors(objeto)```` = retorna as propriedades do objeto
<br>
````.getOwnPropertyDescriptor(objeto, "atributo")```` = retorna a descrição do atributo
<br>
````.preventExtensions(objeto)```` = previne a adição de novos atributos
<br>
````.isExtensible(objeto)```` = verifica se é extensível
<br>
````.isFrozen(objeto)```` = verifica se está congelado
<br>
````.isSealed(objeto)```` = verifica se está selado
<br>
````.getPrototypeOf(objeto)```` = retorna o protótipo do objeto
<br>
````.setPrototypeOf(objeto, novoPrototipo)```` = define um novo protótipo
<br>
````.create(objeto)```` = cria um novo objeto com base no objeto passado
<br>
````.getOwnPropertyNames(objeto)```` = retorna as chaves do objeto
<br>
````.getOwnPropertySymbols(objeto)```` = retorna os símbolos do objeto
<br>
````.is(objeto1, objeto2)```` = verifica se os objetos são iguais
<br>
````.toString(objeto)```` = retorna o tipo do objeto
<br>
````.valueOf(objeto)```` = retorna o valor primitivo do objeto
<br>
````.hasOwnProperty(objeto, "atributo")```` = verifica se o objeto possui o atributo
<br>
<br>


# palavras reservadas mais usadas
````this````= referência ao objeto que está sendo criado
<br>
````then````= executa uma função após a resolução de uma promessa
<br>
````super````= referência à classe pai
<br>
````extends```` = herança
<br>
````static````= método que pertence à classe e não ao objeto
<br>
````get````= método que retorna um valor
<br>
````set````= método que modifica um valor
<br>
````new````= cria um novo objeto
<br>
````public````= acesso livre
<br>
````private````= acesso restrito
<br>
````protected````= acesso restrito a classes filhas
<br>
````construtor````= método especial que é chamado no momento da criação do objeto
<br>
````typeof````= retorna o tipo de dado
<br>
````instanceof````= verifica se um objeto é uma instância de uma classe
<br>
````delete````= deleta um atributo de um objeto
<br>
````in````= verifica se um atributo existe em um objeto
<br>
````try...catch````= tratamento de erro
<br>
````throw```` = lança um erro
<br>
````finally```` = sempre é executado
<br>
````break```` = interrompe a execução
<br>
````continue```` = pula para a próxima iteração
<br>
````return```` = retorna um valor
<br>
````async````= função assíncrona
<br>
````await````= espera a resolução de uma promessa
<br>
````import```` = importa um módulo
<br>
````export```` = exporta um módulo
<br>
````module```` = módulo
<br>
````require```` = requer um módulo
<br>
````exports```` = exporta um módulo
<br>
````module.exports```` = exporta um módulo
<br>
````__dirname```` = diretório atual
<br>
````__filename```` = nome do arquivo
<br>
````setTimeout```` = executa uma função após um tempo
<br>
````setInterval```` = executa uma função em intervalos regulares
<br>
````clearTimeout```` = cancela o setTimeout
<br>
````clearInterval```` = cancela o setInterval
<br>
````fetch```` = busca dados de uma API
<br>
````JSON```` = JavaScript Object Notation
<br>
````Math ````= matemática
<br>
````Date```` = data
<br>
````RegExp````= expressão regular
<br>
````Promise```` = promessa
<br>
````generator```` = gera um valor
<br>
````yield```` = retorna um valor
<br>
````hoisting```` = elevação
<br>
````closure```` = fechamento
<br>
````callback```` = retorno de chamada
<br>
````event```` = evento
<br>
````listener```` = ouvinte
<br>
````handler```` = manipulador
<br>
````router```` = roteador
<br>
```` controller```` = controlador
<br>
````model```` = modelo
<br>
````view```` = visualização
<br>
````template```` = modelo
<br>
````component```` = componente
<br>
````directive````= diretiva
<br>
````service```` = serviço
<br>
````factory```` = fábrica
<br>
````singleton```` = único
<br>
````dependency injection```` = injeção de dependência
<br>
````transpiler```` = transpilador
<br>
````polyfill```` = preenchimento
<br>

 # siglas mais usadas
````DOM```` = Document Object Model
<br>
````BOM```` = Browser Object Model
<br>
````AJAX ````= Asynchronous JavaScript and XML
<br>
````REST```` = Representational State Transfer
<br>
````API ````= Application Programming Interface
<br>
````SPA```` = Single Page Application
<br>
````SSR```` = Server Side Rendering
<br>
````CSR```` = Client Side Rendering
<br>
````JWT```` = JSON Web Token
<br>
````MVC ````= Model View Controller
<br>
````ORM```` = Object Relational Mapping
<br>
````ODM```` = Object Document Mapping
<br>
````TDD```` = Test Driven Development
<br>
````BDD```` = Behavior Driven Development
<br>
````CI```` = Continuous Integration
<br>
````CD```` = Continuous Deployment
<br>
````LTS```` = Long Term Support 
<br>
<br>

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

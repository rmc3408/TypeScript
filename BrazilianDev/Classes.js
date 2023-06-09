class Dog {
  name = "Nashville"
  breed

  constructor(breed) {
    this.breed = breed
  }

  speak = function () {
    console.log("woof")
  }

  print() {
    console.log(this.name + " is a " + this.breed)
  }
}

const doggie = new Dog("lab")
doggie.speak()
doggie.print()

console.log("------------------")

class Dev {
  nome
  idade
  habilidade

  constructor(name, age, skill) {
    this.nome = name
    this.idade = age
    this.habilidade = skill
  }

  greet() {
    return `My name is ${this.nome}, age: ${this.idade} and main skill is ${this.habilidade}`
  }
}

class FrontEnd extends Dev {
  framework

  constructor(name, age, skill, framework) {
    super(name, age, skill)
    this.framework = framework
  }

  greet() {
    return super.greet() + ` and i am frontEnv developer in ${this.framework}`
  }
}

class BackEnd extends Dev {
  database

  constructor(name, age, skill, database) {
    super(name, age, skill)
    this.database = database
  }

  greet() {
    return super.greet() + ` and i am Back End developer in ${this.database}`
  }
}

const person1 = new Dev("Peter", 22, "Java")
console.log(person1.greet())

const person2 = new FrontEnd("John", 30, "Javascript", "React")
console.log(person2.greet())

const person3 = new BackEnd("Mary", 41, "Javascript", "MongoDb")
console.log(person3.greet())

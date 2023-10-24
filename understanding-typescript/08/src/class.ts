/**
 * 
 * CLASS DECORATORS
 * 
 */

function Logger(target: Function) {
  console.log('logging...')
  console.log(target)
}

@Logger // Decorator executed when CLASS is defined (lexical runtime) not need call function
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating Person', this.name)
  }
}
const person = new Person() // if omit, decorators still run.

console.log('-'.repeat(50))
///////////////////////////////////


function logMethod(target: typeof People) {
  target.prototype.age = 28
  target.prototype.sayHello()
}

@logMethod
class People {
  name: string = 'Raph';
  age: number | undefined;

  sayHello() {
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}!`);
  }
}

const p3 = new People() //Here constructor is executed.
p3.sayHello()


console.log('-'.repeat(50))
///////////////////////////////////


function Logging(text: string) {
  return function (constructor: Function & typeof Animal) {
    console.log('logging text from variable', text)
    console.log('Classname is ', constructor.name, constructor.prototype.type)
  }
}

function withTemplate(templateHtml: string, cssId: string) {
  return function (constructor: typeof Animal) {
    const element = document.getElementById(cssId)!
    const n1 = new constructor()
    if (element) {
      element.innerHTML = templateHtml
      element.querySelector('h1')!.textContent = n1.type
    }
  }
}

@Logging('animal class')
@withTemplate('<h1>My personal Animal</h1>', 'app')
class Animal {
  type = 'Dog is data inside Animal class'

  constructor() {
    console.log('Creating Animal', this.type)
  }
}

console.log('-'.repeat(50))
///////////////////////////////////



type ConstructorFunction = new (...args: any[]) => {}

function ColouredHouse(choice: string = "Detached") {
  return <T extends ConstructorFunction>(target: T) => {
    
    console.info("ClassDecorator is executed first")

    return class extends target {
      fuel: number = 50
      label: string = choice
      
      constructor(...args: any[]) {
        super(...args)
        console.log('Did something after the original constructor!')
      }

      printing: Function = () => { 
        console.log('This DecoratorColor class ', this) 
      }
    }
  }
}

@ColouredHouse('Green')
class Color {
  colour: string | undefined
  total: number = 1

  constructor(name: string) {
    console.log('Call Color Constructor called')
    this.colour = name
  }

  print() {
    console.log('This Color class ', this)
  }
}

const c1 = new Color('Aqqua') // executes constructor 
c1.print() //Calls a object involved with class with decorator


console.log('-'.repeat(50))
///////////////////////////////////

function classDecorator<T extends { new(...args: any[]): { property: string } }>(constructor: T) {
  console.log('Class Decorator declaration')
  
  // Extends and replace the old class Greeter 
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
      constructor(...args: any[]) {
        super(...args)
        console.log('Class Decorator Greeter', this)
      }
  }
}
interface classInterface {
  newProperty: string;
  hello: string;
}

// trick is Interface and Class must have same Name
interface Greeter extends classInterface { };

@classDecorator
class Greeter {
  property = "property";
  hello: string = 'hi';
  constructor(m: string) {
    console.log('Class Greeter', this)
    this.hello = m;
  }
}
const b = new Greeter('local')
console.log(b); // All data included if interface and class same name
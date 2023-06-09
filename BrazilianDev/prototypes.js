const animal = {
  som: "noise ",
  tipo: "animal",
  speak: function () {
    console.log(this.som)
  }
}

const dog = {
  som: "woof ",
  tipo: "cachorro"
}

animal.speak()

// It is vanilla version of Inheritance
Object.setPrototypeOf(dog, animal)
dog.speak()

//get who is superClass
console.log(Object.getPrototypeOf(dog))

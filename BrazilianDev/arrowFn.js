// All function declarations can be effectively ANYWHERE of the scope
/**
 * function definition
 * or function declaration
 * or function statement
 * */
simpleNamed()
function simpleNamed() {
  const name = "function declaration"
  console.log("simple Named Function")
  console.log("This value", this, name)
}
simpleNamed()

/** function expression. */
// square(5) must be declare after variable
const square = function (number) {
  const name = "expression Fn " + number
  console.log("Expression Function")
  console.log("This value", this, name)
}
square(5)

const fnArrow = () => {
  const name = "Arrow"
  console.log("This is ArrowFunction")
  console.log("This value", this, name)
}
fnArrow()

console.log("------")

const objArrowThis = {
  name: "Raph",
  printName: function named() {
    console.log(this)
    console.log(this.name)
  },
  printNameArrow: () => {
    console.log(this) //ERROR, undefined
    console.log(this?.name) //ERROR, undefined
  },
  printSquare: square
}

objArrowThis.printName()
objArrowThis.printNameArrow()
objArrowThis.printSquare(4)

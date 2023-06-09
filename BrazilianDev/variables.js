const global = "global variable"

if (true) {
  var exposta = "exposta"
  //const naoExpostaCONST = "global variable"
  //let naoExpostaLET = "nao exposta"
}

console.log(global)
console.log(exposta)
//console.log(naoExpostaCONST) ERROR
//console.log(naoExpostaLET) ERROR

// In primitive data, cannot change.
let txt = "Raph"
txt = "Raphael"
console.log(txt)

const txt2 = "Raph"
// txt2 = "Raphael"  ERROR
console.log(txt2)

//Array and object can change values,
// But NOT change their type.
const arr1 = [1, 2, 3]
arr1.push(4)
console.log(arr1)
//arr1 = 'Change' // ERROR

const obj1 = { a: 1, b: 2 }
obj1.c = 3
delete obj1.b
console.log(obj1)
// obj1 = "Raph" ERROR

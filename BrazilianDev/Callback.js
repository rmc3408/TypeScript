const greeting = (name) => console.log("Hello ", name)
const bye = (name) => console.log("Good Bye ", name)

const replyUser = (callback) => {
  const name = "raphael"
  callback(name)
}

replyUser(greeting)
replyUser(bye)

const calc = (x, y, operation) => operation(x, y)

const add = (x, y) => x + y
const substract = (x, y) => x - y
const multiply = (x, y) => x * y

const x = 2
const y = 3

console.log("Result adding", calc(x, y, add))
console.log("Result substracting", calc(x, y, substract))
console.log("Result multiplying", calc(x, y, multiply))

console.log("-------------------")

// Callback are used in HOC function
const mood = "happy"
function isHappy(fn1, fn2) {
  if (mood === "happy") fn1({ msg: "FELIZ" })
  if (mood === "sad") fn2({ msg: "TRISTE" })
}

const fnGood = (ctx) => console.log("You are " + ctx.msg)
const fnBad = (ctx) => console.error("You are " + ctx.msg)

isHappy(fnGood, fnBad)

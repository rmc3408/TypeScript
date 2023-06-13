function sumInfinity(...args) {
  console.log(args)
}
sumInfinity(20, 40, 60)

function sumOneInfinity(arg1, ...args) {
  console.log(arg1, args)
}
sumOneInfinity(1, 2, 3)

const arrWords = ["Staple", "IBM", "Google", "CGI"]

function sumWordsInfinity(...args) {
  console.log(...args)
  console.log(args)
}
sumWordsInfinity(...arrWords)

// Combining data
const arrNumbers = [1, 2, 3]
const arrNew = [...arrWords, true, ...arrNumbers]
console.log(arrNew)

// Destructuring
const numbs = { a: 1, b: 2, c: 3, d: 4 }
const companies = ["Staple", "IBM", "Google", "CGI", "USBank", "Shein", "UPS"]

const { a, c } = numbs
console.log("numbers", a, c)

const [um, , tres, quatro = "Alibaba", ...resto] = companies
console.log("companies", um, tres, quatro, resto)

//Array can be inverted values
let x, y
x = "air"
y = "water"
;[y, x] = [x, y]
console.log(x, y)

// Object follow key name
let w, z
;({ z, w } = { w: 2, z: 4 })
console.log(w, z)

// Renaming during destructuring
const { a: foo, b: bar } = numbs
console.log(foo, bar)

const { a: ten = 10, e = 50 } = numbs
console.log(ten, e)

const metadata = {
  title: "Scrap",
  trans: [{ title: "Dune", year: 2011 }],
  fullname: {
    first: "Amar",
    last: "Szair"
  }
}

const {
  title: t,
  trans: [{ year: ye }],
  fullname: { first: n }
} = metadata
console.log(t, ye, n)

let { ["zap"]: keyFoo } = { zap: "bar" }
console.log(keyFoo)

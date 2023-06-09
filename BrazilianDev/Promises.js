const promessaTruthy = new Promise((resolve, reject) => {
  let sum = 1 + 2
  sum === 3 ? resolve("Right answer") : reject("wrong answer")
})

const promessaFalsy = new Promise((resolve, reject) => {
  let sum = 1 + 1
  sum === 3 ? resolve("Right answer") : reject("wrong answer")
})

console.log(promessaTruthy, promessaFalsy) //this is syncronous - get promise

promessaTruthy
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("done"))

// -------------------

const pass = Promise.resolve("passed")
const fail = Promise.reject("failed")

pass.then((res) => console.log(res))
fail.catch((res) => console.log(res))

// Give Array of All resolved promises
Promise.all([promessaTruthy]).then((listAnswer) =>
  console.log("Promise.ALL", listAnswer)
)

// Accept all type of promise, give results of All
Promise.allSettled([promessaTruthy, promessaFalsy]).then((listAnswer) =>
  listAnswer.forEach((answer) => {
    console.log("Promise.ALLSettled", answer)
  })
)

// First to be completed, break if any reject
Promise.race([promessaTruthy, promessaFalsy]).then((FirstAnswer) =>
  console.log("Promise.RACE", FirstAnswer)
)

// Give the first one who RESOLVE, ignore REJECTS and continue
Promise.any([promessaFalsy, pass, promessaTruthy]).then((listAnswer) =>
  console.log("Promise.ANY", listAnswer)
)

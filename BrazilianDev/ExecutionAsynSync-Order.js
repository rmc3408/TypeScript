const promessa = new Promise((resolve, reject) => {
  resolve(6)
})

// EXECUTION ORDER
console.log(promessa)
console.log(1)
first()
second()
console.log(4)

promessa.then((res) => res + 1).then((res) => console.log(res + 1))

async function first() {
  console.log(2)
  const res = await Promise.resolve(5)
  console.log(res)
  setTimeout(() => console.log(9), 200)
}

async function second() {
  console.log(3)
  const p = await promessa
  console.log(p)
  const res = await Promise.resolve(7)
  console.log(res)
}

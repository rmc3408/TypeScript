const pass1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("bike"), 100)
  })
const pass2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("car"), 400)
  })
const pass3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("bus"), 800)
  })

//this is sync code calling asyncronous
const allPromisesPending = () => {
  const r1 = pass1()
  const r2 = pass2()
  console.log("pass2", r2)
  const r3 = pass3()

  console.log(r1, r2, r3) // sync calls get promises pending
}
allPromisesPending()

const allFn = async () => {
  const r1 = await pass1()
  const r2 = await pass2()
  console.log("pass2", r2)
  const r3 = await pass3()

  await pass3().then((res) => console.log("pass3 => await+then+" + res))

  console.log(r1, r2, r3)
}
allFn()

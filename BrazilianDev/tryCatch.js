function errFn1() {
  try {
    CODIGO
  } catch (err) {
    console.error("something wrong in function 1\n", err)
  } finally {
    console.info("Function 1 executed")
  }
}

function errFn2() {
  console.info("Function 2 executed")
}

function errFn3() {
  if (true) throw new Error("function 3 got value error")
  console.info("Function 3 executed")
}

const mainFn = () => {
  try {
    errFn1()
    errFn2()
    errFn3()
  } catch (err) {
    console.error("something wrong in main\n", err)
  } finally {
    console.info("main function executed")
  }
}

mainFn()
console.log("---end---")

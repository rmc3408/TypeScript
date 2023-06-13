function sumInfinity() {
  console.log(arguments)
  const numbersObj = Object.values(arguments)
  const numbersArr = Array.from(arguments)
  console.log(numbersObj, numbersArr)

  const total = numbersObj.reduce((prev, total) => (total = total + prev), 0)
  console.log("Sum=", total)
}

sumInfinity(20, 40, 60)

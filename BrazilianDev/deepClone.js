const _ = require("lodash")

const obj = [{ x: 1 }, { y: { z: 34, w: 35, u: { time: Date.now() } } }]
const objCopied = obj
const deepCopy = _.cloneDeep(obj)

console.log("Comparing in memory", obj[0] === deepCopy[0])
console.log("Comparing in memory", obj[0] === objCopied[0])

// Changing original value
obj[0].x = 10

// Values after changing original value
console.log("After changing original value")
console.log("Original obj ", obj)
console.log("Copied obj ", objCopied)
console.log("Deep Copy obj ", deepCopy)

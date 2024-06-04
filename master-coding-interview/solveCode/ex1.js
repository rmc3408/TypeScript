// write down how problem is going to look:

// What are the inputs ? 2 parameter arrays of numbers, string ?

// What are the outputs ? boolean true is there is a common item in the arrays

// How big is the sample ? if small, do not should be worry about time complexity

const ar1 = ["a", "b", "c", "x"];

const ar2 = ["z", "y", "i"];
// should return false
const ar3 = ["z", "y", "x"];
// should return true


// First basic solution, create function with 2 parameters
function commonItem(arr1, arr2) {
  // loop through nested first array and compare one by one.
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(commonItem(ar1, ar3)) //O(a*b)

// function commonItem2(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item));
// }
// console.log(commonItem2(ar1, ar3)) //O(a*b)
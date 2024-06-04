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
  // loop through first array and create object where properties are the elements of the first array
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = true;
    }
  }
  // loop through second array and check if the element is in the object
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(commonItem(ar1, ar3)) //O(a + b)

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();

  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))
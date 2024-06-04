const Arr1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

function findNumber(arr) {
  const t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 90) {
      console.log(i)
    }
  }
  const t1 = performance.now();
  console.log(`Call to findNumber took ${t1 - t0} milliseconds.`)
}

findNumber(Arr1); //Big O Notation: O(n) - linear time complexity

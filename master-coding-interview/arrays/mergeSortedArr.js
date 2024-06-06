
function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  
  let mergedArr = [...arr1, ...arr2];
  mergedArr.sort((a, b) => a - b);
  return mergedArr;
}



mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
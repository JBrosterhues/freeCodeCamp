function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let sortedArr = arr.slice();
    sortedArr.sort((a, b) => a-b);
    let i = 0;
    while ((i < sortedArr.length) && (sortedArr[i] < num)) {
      i++;
    }
    return i;
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
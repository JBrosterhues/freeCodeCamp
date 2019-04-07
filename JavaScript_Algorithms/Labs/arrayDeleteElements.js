function destroyer(arr) {
    // Remove all the values
    let newArr = [...arr];
    let currIndex = 0;
    for (let i = 1; i < arguments.length; i++) {
      currIndex = newArr.indexOf(arguments[i]);
      while (currIndex !== -1) {
        newArr.splice(currIndex, 1);
        currIndex = newArr.indexOf(arguments[i]);
      }
    }
    return newArr;
  }

  function destroyer1(arr) {
      let argArr = [...arguments];
      argArr.splice(0, 1);
      return arr.filter(item => argArr.indexOf(item) === -1);
  }
  
  console.log(destroyer1([1, 2, 3, 1, 2, 3], 2, 3));
function sumFibs(num) {
    let fibNumArr = [1, 1];
    let fibOddSum = 2;
    let i = 1;
    for (i = 2; i < num; i++) {
      fibNumArr.push(fibNumArr[i-2] + fibNumArr[i-1]);
      if (fibNumArr[i] > num) {
        break;
      }
      if (fibNumArr[i] % 2 === 1) {
        fibOddSum += fibNumArr[i];
      }
    }
    console.log(num + ": " + fibNumArr[i] + " - " + fibOddSum);
    return fibOddSum;
  }
  
  console.log(sumFibs(1) + "\n");
  console.log(sumFibs(4) + "\n");
  console.log(sumFibs(10) + "\n");
  console.log(sumFibs(1000) + "\n");
  console.log(sumFibs(75024) + "\n");
  console.log(sumFibs(75025) + "\n");
  console.log(sumFibs(75026) + "\n");

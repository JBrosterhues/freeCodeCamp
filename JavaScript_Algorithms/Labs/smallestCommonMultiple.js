function isPrime(num) {
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function primeFactors(num) {
    let primeFactorArr = [];
    if (isPrime(num)) {
        primeFactorArr.push(num);
    }
    else {
        let currFactor = 2;
        let remainder = num;
        while (currFactor <= Math.floor(num / 2)) {
            if (isPrime(currFactor)) {
                while (remainder % currFactor === 0) {
                    primeFactorArr.push(currFactor);
                    remainder /= currFactor;
                }
            }
            currFactor++;
        }
    }
    return primeFactorArr;
}


function smallestCommons(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let smallestCommonMultiple = 1;
    let allFactorArr = [];
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        let currFactorArr = primeFactors(i);
        let tempAllFactorArr = [...allFactorArr];
        let remainingFactorArr = currFactorArr.filter(item => {
            let itemIndex = tempAllFactorArr.indexOf(item);
            if (itemIndex !== -1) {
                tempAllFactorArr.splice(itemIndex, 1);
            }
            else {
                return true;
            }
        });
        allFactorArr.push(...remainingFactorArr);
    }
    allFactorArr.forEach(item => smallestCommonMultiple *= item);
    return smallestCommonMultiple;
}


// console.log(primeFactors(5));
// console.log(primeFactors(10));
// console.log(primeFactors(20));
// console.log(primeFactors(100));
// console.log(primeFactors(105*11));

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));

let findLongestWordLength = (str) => {
    let arrOfWords = str.split(' ');
    return arrOfWords.reduce((final, current) => current.length > final.length ? current : final).length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
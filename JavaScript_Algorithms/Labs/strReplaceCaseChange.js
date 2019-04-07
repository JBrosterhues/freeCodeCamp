function myReplace(str, before, after) {

    let newAfter = before.match(/^[A-Z]/) ? after[0].toUpperCase() + after.substring(1) : before.match(/^[a-z]/) ? after[0].toLowerCase() + after.substring(1) : after;

    return str.replace(before, newAfter);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
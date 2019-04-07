// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     if (str.length < target.length) {
//       return false;
//     }
//     if (str.substring(str.length - target.length) == target) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }

  let confirmEnding = (str, target) => str.substring(str.length - target.length) === target;
  
  console.log(confirmEnding("Bastian", "n"));
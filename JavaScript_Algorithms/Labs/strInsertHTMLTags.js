function convertHTML(str) {
    // &colon;&rpar;
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      switch (str.charAt(i)) {
        case "&":
          newStr += "&amp;";
          break;
        case "<":
          newStr += "&lt;";
          break;
        case ">":
          newStr += "&gt;";
          break;
        case '"':
          newStr += "&quot;";
          break;
        case "'":
          newStr += "&apos;";
          break;
        default:
          newStr += str[i];
          break;
      }
    }
    return newStr;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
function decodeChar(encodedChar) {
    if (/[A-Z]/.test(encodedChar)) {
        let charCodeA = 'A'.charCodeAt(0);
        let charCode = encodedChar.charCodeAt(0);
        let relCharCode = charCode - charCodeA;
        if (relCharCode >= 13) {
            return String.fromCharCode(charCodeA + relCharCode - 13);
        } else {
            return String.fromCharCode(charCodeA + relCharCode + 13);
        }
    }
    return encodedChar;
}

function rot13(str) {
    // LBH QVQ VG!
    return str
        .split('')
        .map(currChar => decodeChar(currChar))
        .join('');
}

// Change the inputs below to test
console.log(rot13('SERR PBQR PNZC'));

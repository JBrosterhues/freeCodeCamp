function convertDigit(digitCount, digitChar, nextDigitChar, midDigitChar) {
    switch (digitCount) {
        case 9:
            return digitChar + nextDigitChar;
        case 8:
            return midDigitChar + digitChar.repeat(3);
        case 7:
            return midDigitChar + digitChar.repeat(2);
        case 6:
            return midDigitChar + digitChar;
        case 5:
            return midDigitChar;
        case 4:
            return digitChar + midDigitChar;
        default:
            return digitChar.repeat(digitCount);
    }
}

function convertToRoman(num) {
    let romanNum = '';
    let newNum = num;
    if (num >= 1000) {
        newNum = num % 1000;
        romanNum += 'M'.repeat((num - newNum) / 1000);
    }
    if (newNum >= 100) {
        romanNum += convertDigit(Math.floor(newNum / 100), 'C', 'M', 'D');
        newNum = newNum % 100;
    }
    if (newNum >= 10) {
        romanNum += convertDigit(Math.floor(newNum / 10), 'X', 'C', 'L');
        newNum = newNum % 10;
    }
    if (newNum > 0) {
        romanNum += convertDigit(newNum, 'I', 'X', 'V');
    }
    return romanNum;
}

console.log(convertToRoman(3654));

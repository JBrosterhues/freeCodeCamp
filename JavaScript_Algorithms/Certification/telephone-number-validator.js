function telephoneCheck(str) {
    // Good luck!
    return /^(1 ?)?([0-9]{3}|\([0-9]{3}\))[\-\s]?[0-9]{3}[\-\s]?[0-9]{4}$/.test(
        str
    );
}

console.log(telephoneCheck('1 555-555-5555'));

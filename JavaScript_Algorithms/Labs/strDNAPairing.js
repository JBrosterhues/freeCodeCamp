function pairElement(str) {
    let pairObj = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    return str.split('').map(item => [item, pairObj[item]]);
}

console.log(pairElement("GCG"));
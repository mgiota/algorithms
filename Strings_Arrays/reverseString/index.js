function reverseString(str) {
    let reversed = '';
    for(let ch of str) {
        reversed = ch + reversed;
    }

    return reversed;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseString(str) {
    let strArr = str.split('');
    let len = strArr.length;
    for(let i = 0; i < Math.floor(len/2); i++) {
        let temp = strArr[i];
        strArr[i] = strArr[len - 1 - i];
        strArr[len - 1 - i] = temp;
    }

    return strArr.join('');
}

function reverseString(str) {
    return str.split('').reduce((rev, ch) => ch + rev, '');
}

function reverseString(str) {
    // giota atoig
    let reversed = '';
    let i;

    for(i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

module.exports = reverseString;
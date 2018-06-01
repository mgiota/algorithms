/**
 * @example
 * // returns 123
 * reverseInt(321)
 * @example
 * // returns 5
 * reverseInt(500)
 * @example
 * // returns -51
 * reverseInt(-15)
 * @example
 * // returns -9
 * reverseInt(-90)
 * @param {*number} num
 */
function reverseInt(num) {
    let output = [];
    let inputStr = num.toString();

    for(let i = inputStr.length - 1; i >= 0; i--) {
        output.push(inputStr[i]);
    }

    return parseInt(output.join(''), 10) * Math.sign(num);
}

function reverseInt(num) {
    let str = num.toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(str, 10) * Math.sign(num);
}

function reverseInt(num) {
    const numStr = num.toString();
    let reversed = numStr
        .split('')
        .reverse();

    if (reversed[numStr.length - 1] === '-') {
        reversed.splice(0, 0, reversed.splice(numStr.length - 1,1)[0])
    }

    return parseInt(reversed.join(''), 10);
}

module.exports = reverseInt;
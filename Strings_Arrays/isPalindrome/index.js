/**
 * palindromes are strings that form the same word if it is reversed
 * @example
 * // returns true
 * isPalindrome(amma)
 * @example
 * // returns false
 * isPalindrome(test)
 * @param {string} str
 * @returns {boolean} if a string is palindrome or not
 */

const reverseString = require('../reverseString');

// This solution only works for words, not phrases
// no normalization
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}


function isPalindrome(str) {
    str = str.toLowerCase()
        .replace(/[^\w]/g, '');

    const len = str.length;
    const middle = Math.floor(len / 2);
    for(let i = 0; i < middle; i++) {
        if (str[i] !== str[len -1 - i]) {
            return false;
        }
    }

    return true;
}

function isPalindrome(str) {
    str = str.toLowerCase().split('');
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz';

    let lettersArr = [];
    str.forEach(ch => {
        if (validCharacters.indexOf(ch) > -1) {
            lettersArr.push(ch);
        }
    });

    return lettersArr.join('') === lettersArr.reverse().join('');
}

function isPalindrome(str) {
    let strNormalized = str.toLowerCase().replace(/[^\w]/g, '');
    return strNormalized === reverseString(strNormalized);
}

function isPalindrome(str) {
    str = str.toLowerCase()
        .replace(/[^\w]/g, '');
    const len = str.length;
    return str.split('').every((ch, i) => ch === str[len - 1 - i]);
}

module.exports = isPalindrome;
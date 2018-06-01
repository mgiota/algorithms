/**
 *
 * @param {string} str
 * @returns {string} most commonly used character in the string
 */
function maxChar(str) {
    let charMap = {};

    for (let ch of str) {
        if (!charMap[ch]) {
            charMap[ch] = 1;
        } else {
            charMap[ch]++;
        }
    }

    let maxCount = 0;
    let maxChar = [];
    for (ch in charMap) {
        if (charMap[ch] > maxCount) {
            maxCount = charMap[ch];
            maxChar = [];
            maxChar.push(ch);
        } else if (charMap[ch] === maxCount) {
            maxChar.push(ch);
        }
    }

    // Scenario where each character appears once
    if(Object.keys(charMap).length === str.length) {
        maxChar = [];
    }
    return maxChar;
}

module.exports = maxChar;
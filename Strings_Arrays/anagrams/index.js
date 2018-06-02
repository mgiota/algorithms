/**
 * One string is an anagram of another if it uses the same characters
 * in the same quantity
 * @param {*string} str1
 * @param {*string} str2
 */

function anagrams(str1, str2) {
    const strMap1 = _buildMap(str1);
    const strMap2 = _buildMap(str2);

    if (Object.keys(strMap1).length !== Object.keys(strMap2).length) {
        return false;
    }

    for (let ch in strMap1) {
        if (strMap1[ch] !== strMap2[ch]) {
            return false;
        }
    }

    return true;
}

function _buildMap(str) {
    str = str.toLowerCase()
        .replace(/[^\w]/g, '');
    let charMap = {};

    for (let ch of str) {
        if (charMap[ch]) {
            charMap[ch]++;
        } else {
            charMap[ch] = 1;
        }
    }

    return charMap;
}

function _normalize(str) {
    return str.replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function anagrams(str1, str2) {
    return _normalize(str1) === _normalize(str2);
}

module.exports = anagrams;
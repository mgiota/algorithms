function caesarCipher(str, num) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt();
        let newLetter;
        if (num < 0) {
            num = num + 26;
        }
        if (str[i].toUpperCase() === str[i]) {
            newLetter = String.fromCharCode(((code - 65 + num) % 26) + 65);
        } else {
            newLetter = String.fromCharCode(((code - 97 + num) % 26) + 97);
        }

        output+= newLetter;
    }
    return output;
}

// a-z -> 97-122
// 124 -> 98

function caesarCipher(str, num) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt();
        let newLetter;
        if (num < 0) {
            num = num + 26;
        }
        newLetter = String.fromCharCode(((code - 97 + num) % 26) + 97);
        if (str[i].toUpperCase() === str[i]) {
            newLetter = newLetter.toUpperCase();
        }

        output+= newLetter;
    }
    return output;
}

function caesarCipher(str, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strLowerCase = str.toLowerCase();
    let output = '';
    // if (num < 0) {
    //     num = num + 26;
    // }
    for (let i = 0; i < strLowerCase.length; i++) {
        let currentIndex = alphabet.indexOf(strLowerCase[i]);
        let newIndex = (currentIndex + num) % 26;
        if (newIndex < 0) {
            newIndex = 26 + newIndex
        }
        let newCharacter = alphabet[newIndex];
        if (str[i].toUpperCase() === str[i]) {
            newCharacter = newCharacter.toUpperCase();
        }
        output+= newCharacter;
    }

    return output;
}


module.exports = caesarCipher;

function reverseWords(str) {
    let reversed = '';
    let words = str.split(' ');
    words = words.map(word => {
        word = word.split('').reverse().join('');
    })


    return words.join(' ');
}

function reverseWords(str) {
    let words = str.split(' ');
    words = words.map(word => {
        let reverseWord = '';
        for(let i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }

        return reverseWord;
    });
    return words.join(' ');
}

function reverseWords(str) {
    let words = str.split(' ');
    let reverseWords = [];
    words.forEach(word => {
        let reversedWord = '';
        for(let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reverseWords.push(reversedWord);
    });
    return reverseWords.join(' ');
}

module.exports = reverseWords;
function capitalize(str) {
    let words = str.split(' ');

    words = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return words.join(' ');
}

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalize;
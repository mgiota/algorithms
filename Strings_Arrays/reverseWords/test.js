const reverseWords = require('./index.js');

test('it reverses one word', () => {
    const word = 'giota';
    expect(reverseWords(word)).toEqual('atoig');
});
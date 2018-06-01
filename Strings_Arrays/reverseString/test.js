const reverseString = require('./index.js');

test('reverse string with odd num of characters', () => {
    expect(reverseString('giota')).toEqual('atoig');
});

test('reverse string with even num of characters', () => {
    expect(reverseString('test')).toEqual('tset');
});
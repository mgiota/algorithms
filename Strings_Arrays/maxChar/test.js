const maxChar = require('./index.js');

test('maxChar example 1', () => {
    expect(maxChar('panagiota')).toEqual(['a']);
});

test('maxChar example 2', () => {
    expect(maxChar('1231111112311')).toEqual(['1']);
});

test('maxChar example 3 where each character appears once', () => {
    expect(maxChar('abcd')).toEqual([]);
});

test('maxChar example 4 where more characters appear max number of times', () => {
    expect(maxChar('abcdabcd')).toEqual(['a', 'b', 'c', 'd']);
});

test('maxChar example 5', () => {
    expect(maxChar('aabbccc')).toEqual(['c']);
});

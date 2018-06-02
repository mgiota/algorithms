const capitalize = require('./index.js');

test('example1', () => {
    expect(capitalize('a short sentence')).toEqual('A Short Sentence');
});

test('example2', () => {
    expect(capitalize('a lazy fox')).toEqual('A Lazy Fox');
});

test('example3', () => {
    expect(capitalize('look, it is working!')).toEqual('Look, It Is Working!');
});


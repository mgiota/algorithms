const anagrams = require('./index.js');

test('anagrams example 1', () => {
    expect(anagrams('rail safety', 'fairy tales')).toEqual(true);
});

test('anagrams example 2', () => {
    expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toEqual(true);
});

test('anagrams example 3', () => {
    expect(anagrams('Hi there', 'Bye there')).toEqual(false);
});

test('anagrams example 4', () => {
    expect(anagrams('hello', 'llohes')).toEqual(false);
});
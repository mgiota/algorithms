const reverseArrInPlace = require('./index.js');

test('it reverses an array with odd numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reverseArrInPlace(arr)).toEqual([5, 4, 3, 2, 1]);
});

test('it reverses an array with even numbers', () => {
    const arr = [1, 2, 3, 4];
    expect(reverseArrInPlace(arr)).toEqual([4, 3, 2, 1]);
});

test('it handles correct an empty array', () => {
    const arr = [];
    expect(reverseArrInPlace(arr)).toEqual([]);
});

test('it handles correct an array with 1 element', () => {
    const arr = [1];
    expect(reverseArrInPlace(arr)).toEqual([1]);
});
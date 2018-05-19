const binarySearch = require('./index.js');

test('finds element with binary search', () => {
    expect(binarySearch([2, 6, 8, 10], 2)).toEqual(true);
});

test('does not find element with binary search', () => {
    expect(binarySearch([2, 6, 8, 10], 3)).toEqual(false);
});
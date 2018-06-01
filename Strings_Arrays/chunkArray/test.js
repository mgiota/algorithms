const chunk = require('./index.js');

test('example 1', () => {
    expect(chunk([1, 2, 3, 4, 5 , 6, 7], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
});

test('example 2', () => {
    expect(chunk([1, 2, 3, 4, 5 , 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
});
const bubbleSort = require('./index.js');

// test('sorts an array', () => {
//     const arr = [1, 6, 0, 9, 12, 5, 21, 19];
//     expect(bubbleSort(arr)).toEqual([0, 1, 5, 6, 9, 12, 19, 21]);
// });

test('sorts an array', () => {
    const arr = [5, 9, 7, 2];
    expect(bubbleSort(arr)).toEqual([2, 5, 7, 9]);
});
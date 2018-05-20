const mergeSort = require('./index.js');

test('sort array using mergesort', () => {
    const arr = [4, 1, 2, 9, 3, 6, 5];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 9]);
});
const twoSum = require('./index.js');

test('find complementary pairs', () => {
    const arr = [1, 6, 4, 5, 3, 3];
    expect(twoSum(arr, 7)).toEqual([[6, 1], [3, 4], [3, 4]]);
});
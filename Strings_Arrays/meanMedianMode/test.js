const meanMedianMode = require('./index.js');

test('find mean median mode', () => {
    const arr = [2, 5, 7, 9, 10, 2];
    const expected = {
        mean: 5.83,
        median: 6,
        mode: [2]
    };
    expect(meanMedianMode(arr)).toEqual(expected);
});
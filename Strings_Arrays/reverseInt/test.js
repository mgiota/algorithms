const reverseInt = require('./index.js');

test('reverse int example 1', () => {
    expect(reverseInt(123)).toEqual(321);
});

test('reverse int example 2', () => {
    expect(reverseInt(500)).toEqual(5);
});

test('reverse int example 3 negative number', () => {
    expect(reverseInt(-15)).toEqual(-51);
});
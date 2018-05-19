const fibMemo = require('./index.js');

test('fibonacci 3', () => {
    expect(fibMemo(3)).toEqual(2);
});

test('fibonacci 4', () => {
    expect(fibMemo(4)).toEqual(3);
});

test('fibonacci 5', () => {
    expect(fibMemo(5)).toEqual(5);
});

test('fibonacci 6', () => {
    expect(fibMemo(6)).toEqual(8);
});

test('fibonacci 7', () => {
    expect(fibMemo(7)).toEqual(13);
});

test('fibonacci 8', () => {
    expect(fibMemo(8)).toEqual(21);
});

test('fibonacci 9', () => {
    expect(fibMemo(9)).toEqual(34);
});

test('fibonacci 10', () => {
    expect(fibMemo(10)).toEqual(55);
});
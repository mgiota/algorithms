const fibonacci = require('./index.js');

test('fibonacci 3', () => {
    expect(fibonacci(3)).toEqual(2);
});

test('fibonacci 4', () => {
    expect(fibonacci(4)).toEqual(3);
});

test('fibonacci 5', () => {
    expect(fibonacci(5)).toEqual(5);
});

test('fibonacci 6', () => {
    expect(fibonacci(6)).toEqual(8);
});

test('fibonacci 7', () => {
    expect(fibonacci(7)).toEqual(13);
});

test('fibonacci 8', () => {
    expect(fibonacci(8)).toEqual(21);
});

test('fibonacci 9', () => {
    expect(fibonacci(9)).toEqual(34);
});

test('fibonacci 10', () => {
    expect(fibonacci(10)).toEqual(55);
});
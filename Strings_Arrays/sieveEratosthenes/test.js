const sieveEratosthenes = require('./index.js');

test('find sieve of eratosthenes', () => {
    expect(sieveEratosthenes(9)).toEqual([2, 3, 5, 7])
});
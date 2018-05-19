const maxStockProfit = require('./index.js');

test('find max stock profit', () => {
    const arr = [32, 46, 26, 38, 40, 48, 42];
    expect(maxStockProfit(arr)).toEqual(22);
});
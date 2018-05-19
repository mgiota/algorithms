function maxStockProfit(pricesArr) {
    let maxProfit = -1;
    let minPrice = pricesArr[0];
    let maxPrice = pricesArr[0];

    for (let i = 1; i < pricesArr.length; i++) {
        if (pricesArr[i] < minPrice) {
            minPrice = pricesArr[i];
        } else if (pricesArr[i] > maxPrice) {
            maxPrice = pricesArr[i];
        }
    }

    return maxPrice - minPrice;
}

module.exports = maxStockProfit;
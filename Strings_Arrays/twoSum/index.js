function twoSum(numArray, sum) {
    // 2 4 6 3 7 1 | 8
    // 6 4 2 5 1 7
    let pairs = [];
    let hashTable = [];
    numArray.forEach(num => {
        const counterpart = sum - num;
        if (hashTable.indexOf(counterpart) !== -1) {
            pairs.push([num, counterpart]);
        }
        hashTable.push(num);
    });

    return pairs;
}

module.exports = twoSum;
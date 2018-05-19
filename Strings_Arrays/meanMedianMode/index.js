function _findMean(arr) {
    const sum = arr.reduce((curr, acc) => curr + acc, 0);

    return Math.round(sum / arr.length * 100) / 100;
}

function _findMedian(arr) {
    arr.sort((a, b) => a > b);
    let median;

    if (arr.length % 2 !== 0) {
        median =  arr[Math.floor(arr.length / 2)];
    } else {
        // 1 2 3 4
        const mid1 = arr[arr.length / 2 - 1];
        const mid2 = arr[arr.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

function _findMode(arr) {
    var arrMap = {}
    arr.forEach(elem => {
        if (arrMap[elem]) {
            arrMap[elem] += 1;
        } else {
            arrMap[elem] = 1;
        }
    });

    let maxFrequency = 0;
    let output = [];
    for (let elem in arrMap) {
        elem = parseInt(elem);
        if (arrMap[elem] > maxFrequency) {
            output = [elem];
            maxFrequency = arrMap[elem];
        } else if (arrMap[elem] === maxFrequency) {
            output.push(elem);
        }
    }

    if (output.length === Object.keys(arrMap).length) {
        output = [];
    }

    return output;
}

function meanMedianMode(arr) {
    return {
        mean: _findMean(arr),
        median: _findMedian(arr),
        mode: _findMode(arr)
    }
}

module.exports = meanMedianMode;

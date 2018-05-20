function mergeSort(arr) {

    if(arr.length === 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(arr1, arr2) {
    let sorted = [];

    while (arr1.length && arr2.length) {
        let minElem;
        if(arr1[0] < arr2[0]) {
            minElem = arr1.shift();
        } else {
            minElem = arr2.shift();
        }

        sorted.push(minElem);
    }

    if (arr1.length) {
        sorted = sorted.concat(arr1);
    } else {
        sorted = sorted.concat(arr2);
    }

    return sorted;
}

module.exports = mergeSort;
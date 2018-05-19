function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === num) {
            return true;
        } else if (arr[middle] > num) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return false;
}

function binarySearch(arr, num) {
    const middle = Math.floor(arr.length / 2);
    if (arr[middle] === num) {
        return true;
    }

    if (arr[middle] < num && arr.length > 1) {
        return binarySearch(arr.splice(middle, arr.length),num);
    } else if(arr[middle] > num && arr.length > 1) {
        return binarySearch(arr.splice(0, middle),num);
    }

    return false;
}

function binarySearch(arr, num) {
    const middle = Math.floor(arr.length / 2);
    if (arr[middle] === num) {
        return true;
    }

    if (arr[middle] < num) {
        return binarySearch(arr.splice(middle + 1, arr.length - 1 - middle),num);
    } else if(arr[middle] > num) {
        return binarySearch(arr.splice(0, middle),num);
    }

    return false;
}

// [1, 3, 4, 6, 7]
module.exports = binarySearch;
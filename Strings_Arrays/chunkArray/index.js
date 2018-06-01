/**
 * Divide the array into subArrays
 * where each subarray is of length size
 * @param arr
 * @param {*number} size
 */
function chunk(arr, size) {
    let output = [];

    arr.forEach((elem, i) => {
        if (i % size === 0) {
            output.push([elem]);
        } else {
            output[output.length - 1].push(elem)
        }
    });

    return output;
}

function chunk(arr, size) {
    let output = [];

    arr.forEach((elem, i) => {
        if (i % size === 0) {
            output.push(arr.slice(i, i + size))
        }
    });

    return output;
}

function chunk(arr, size) {
    let output = [];

    let index = 0;
    while (index < arr.length) {
        output.push(arr.slice(index, index + size));
        index+=size;
    }
    return output;
}

function chunk(arr, size) {
    let chunked = [];

    for(let elem of arr) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([elem]);
        } else {
            last.push(elem);
        }
    }
    return chunked;
}

module.exports = chunk;
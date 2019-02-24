/**
 * Console log a step shape with N levels
 * using the # character
 * Make sure the step has spaces on the right hand side
 * @param {*number} n
 */

// function steps(n) {
//     for(let i = 0; i < n; i++) {
//         let output = '';
//         for(j = 0; j < n; j++) {
//             if (j <= i) {
//                 output+= '#';
//             } else {
//                 output+= ' ';
//             }
//         }
//         console.log(output);
//     }
// }

function steps(n, row = 0, str = '') {
    if (row === n) {
        return;
    }

    if (str.length === n) {
        console.log(str);
        return steps(n, row + 1);
    }

    if (str.length <= row) {
        str += '#';
    } else {
        str += ' ';
    }

    return steps(n, row, str);
}



module.exports = steps;

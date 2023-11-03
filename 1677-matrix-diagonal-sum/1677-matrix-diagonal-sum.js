/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let total = 0;
    for (let i = 0;i<mat.length;i++) {
        for (let j=0;j<mat[i].length;j++) {
            if (i === j || i +j == mat.length - 1) {
                total += mat[i][j]
            }
        }
    }
    return total
};
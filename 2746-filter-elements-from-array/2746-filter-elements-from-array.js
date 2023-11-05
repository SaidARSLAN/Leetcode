/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const copyArr = [];
    for (let i = 0;i<arr.length;i++) {
        if (fn(arr[i],i)) {
            copyArr.push(arr[i])
        }
    }
    return copyArr
};
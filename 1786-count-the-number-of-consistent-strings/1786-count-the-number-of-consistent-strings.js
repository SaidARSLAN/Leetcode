/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let temp = "";
    for (let word of words) {
        isConsistent = true;
        for (let letter of word) {
            if (!allowed.includes(letter)) {
                isConsistent = false;
                break
            }
        }
        if (isConsistent) {
            count += 1
        }
    }
    return count
};
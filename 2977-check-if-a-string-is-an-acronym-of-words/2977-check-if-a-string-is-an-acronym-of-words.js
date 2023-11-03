/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let total = ""
    for (let i of words) {
        total += i[0]
    }
    if (total === s) {
        return true
    }
    return false
};
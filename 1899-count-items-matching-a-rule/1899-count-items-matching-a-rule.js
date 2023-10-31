/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    for (let i of items) {
        if (ruleKey === "type") {
            if (i[0] === ruleValue) {
                count += 1
            }
        }
        else if (ruleKey === "color") {
            if (i[1] === ruleValue) {
                count += 1
            }
        }
        else if (ruleKey === "name") {
            if (i[2] === ruleValue) {
                count += 1
            }
        }
    }
    return count
};
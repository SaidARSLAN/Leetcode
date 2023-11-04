/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const temp = [];
    gain.reduce((state,curr) => {
        temp.push(state)
        return state+curr
        },0)
    temp.push(temp[temp.length -1] + gain[gain.length - 1])
    return temp.sort((a,b) => b-a)[0]
};
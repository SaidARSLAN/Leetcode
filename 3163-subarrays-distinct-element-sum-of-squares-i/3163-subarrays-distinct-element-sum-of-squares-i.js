/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const subs = []
    for (let i = 0;i<nums.length;i++) {
        for (let j =0;j<nums.length+1;j++) {
            if (i !== j && nums.slice(i,j).length !== 0) {
                subs.push(nums.slice(i,j))
            }
        }
    }
    let counter = [];
    for (let i of subs) {
        const control = [];
        for (let j of i) {
            if (!control.includes(j)) {
                control.push(j)
            }
        }
        counter.push(control.length)
    }
    let result = 0;
    for (let i of counter) {
        result += (i*i)
    }
    return result
};
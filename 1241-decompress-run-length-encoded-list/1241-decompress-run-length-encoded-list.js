/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const temp = [];
    for (let i = 0;i<nums.length;i+=2) {
        let freq = nums.slice(i,i+2)[0]
        let val = nums.slice(i,i+2)[1]
        while (freq > 0) {
            temp.push(val)
            freq--
        }
    }
    return temp
};
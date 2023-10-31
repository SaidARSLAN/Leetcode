/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let result = 0;
    for (let i = 0;i<nums.length;i++) {
        let bit = eval(i.toString(2).split('').join("+"))
        if (bit === k) {
            result += nums[i]
        }
}
return result
}
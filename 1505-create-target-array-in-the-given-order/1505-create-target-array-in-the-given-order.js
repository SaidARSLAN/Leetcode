/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const temp = [];
    for (let i = 0;i<nums.length;i++) {
        temp.splice(index[i],0,nums[i])
    }
    return temp
};
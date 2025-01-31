/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    for (let num of nums) {
        if (num === original) {
            original *= 2;
            num = -1; 
        }
    }
    return nums.includes(original) ? findFinalValue(nums, original) : original;
};

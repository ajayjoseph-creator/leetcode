/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    return nums
        .filter((num, i) => 
            (i < k || num > nums[i - k]) && 
            (i + k >= nums.length || num > nums[i + k])
        )
        .reduce((sum, num) => sum + num, 0);
};
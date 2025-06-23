/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    total = nums.reduce((a,b)=>a+b)
rem = total % k
return rem
};
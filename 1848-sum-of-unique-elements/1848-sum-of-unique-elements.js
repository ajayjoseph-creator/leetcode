/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let unique = nums.filter((x) =>nums.indexOf(x) === nums.lastIndexOf(x)).reduce((a,b)=>a+b,0)
    return unique;
};
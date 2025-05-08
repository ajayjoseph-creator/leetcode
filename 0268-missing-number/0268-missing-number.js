/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let a=nums.reduce((a,b)=>a+b,0)  
  let b=nums.length*(nums.length+1)/2
  let c=b-a
  return c
};
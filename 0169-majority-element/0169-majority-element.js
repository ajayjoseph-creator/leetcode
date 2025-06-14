/**
 * @param {number[]} nums
 * @return {number}
 */

   var majorityElement = function(nums) {
    let count = {};
    let n = nums.length;

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > n / 2) {
            return num;
        }
    }
};


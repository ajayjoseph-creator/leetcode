/**
 * @param {number[]} nums
 * @return {number[]}
 */
 findDisappearedNumbers = function(nums) {
    let result = new Array(nums.length).fill(0).map((_, i) => i + 1);
    nums.forEach(num => result[num - 1] = 0);
    return result.filter(num => num !== 0);
};

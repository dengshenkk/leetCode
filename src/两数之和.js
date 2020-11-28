/**
 * 求两数之和, 返回下标
 * @param nums
 * @param target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    for (let j = 1; j < nums.length; j++) {
      const num1 = nums[j]
      if (num + num1 === target) {
        return [i, j]
      }
    }
  }
}

console.log(`twoSum([1, 2, 3, 7, 8, 11], 9) :`, twoSum([1, 2, 3, 7, 8, 11], 9))
console.log(`twoSum([3, 2, 3, 7, 8, 11], 6) :`, twoSum([3, 2, 3, 7, 8, 11], 6))

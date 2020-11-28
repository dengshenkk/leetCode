/**
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 * @param nums
 */
function runningSum(nums) {
  let result = []
  nums.reduce((pre, cur) => {
    result.push(cur + pre)
    return cur + pre
  }, 0)
  return result
}


console.log(`runningSum([1, 2, 3, 4]) :`, runningSum([1, 2, 3, 4]))
console.log(`runningSum([1, 1, 1, 1, 1]) :`, runningSum([1, 1, 1, 1, 1]))
console.log(`runningSum([3,1,2,10,1]) :`, runningSum([3,1,2,10,1]))


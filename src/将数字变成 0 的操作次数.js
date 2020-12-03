/**
 * 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
  let count = 0
  while (num !== 0) {
    count++
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num--
    }
  }
  return count
}


console.log(`numberOfSteps(14) :`, numberOfSteps(14))
console.log(`numberOfSteps(8) :`, numberOfSteps(8))
console.log(`numberOfSteps(123) :`, numberOfSteps(123))


function game(guess, answer) {
  let count = 0
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      count++
    }
  }
  return count
}


/**
 *
 * 输入：guess = [2,2,3], answer = [3,2,1]
 * 输出：1
 * 解释：小A 只猜对了第二次。
 *
 */


console.log(`game([1, 2, 3], [1, 2, 3]) :`, game([1, 2, 3], [1, 2, 3]))


/**
 *
 * 输入：guess = [2,2,3], answer = [3,2,1]
 * 输出：1
 * 解释：小A 只猜对了第二次。
 */


console.log(`game([2,2,3], [3,2,1]) :`, game([2,2,3], [3,2,1]))




/**
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * @param J
 * @param S
 */
function numJewelsInStones(J,S) {
let gem = J.split('')
  let count = 0
  let stone = S.split('')
  for (const gemElement of gem) {
    for (const stoneElement of stone) {
      if (gemElement === stoneElement) {
        count++
      }
    }
  }
  return count
}

// TODO 超过的人数太少了,待优化
console.log(`numJewelsInStones('aA', 'aAAbbbb') :`, numJewelsInStones('aA', 'aAAbbbb'))
console.log(`numJewelsInStones('z', 'ZZ') :`, numJewelsInStones('z', 'ZZ'))

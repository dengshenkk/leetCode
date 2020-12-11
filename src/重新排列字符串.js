/**
 *
 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 输出："leetcode"
 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
 * @param s
 * @param indices
 */
function restoreString(s, indices) {
  let result = []
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i]
  }
  return result
}

console.log(`restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]) :`, restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))

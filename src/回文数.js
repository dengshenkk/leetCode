/**
 * 判断是不是一个回文, 关键点在于反转
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  x = x + ''
  if (x.length === 1) {
    return true
  }
  const origin = x.split('').join('')
  const split = x.split('').reverse().join('')
  return origin === split
}

console.log(`isPalindrome(0) :`, isPalindrome(0))
console.log(`isPalindrome(11) :`, isPalindrome(11))
console.log(`isPalindrome(12) :`, isPalindrome(12))
console.log(`isPalindrome(121) :`, isPalindrome(121))
console.log(`isPalindrome(-121) :`, isPalindrome(-121))

/**
 输入：[4,2,1]

 输出：4

 解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。


 * @param coins
 * @returns {number}
 */
function minCount(coins) {
    let count = 0
    let i = 0
    while (i < coins.length) {
        const coin = coins[i];
        if (coin % 2 === 0) {
            count += coin / 2
        } else {
            count += (coin + 1) / 2
        }
        i++
    }
    return count
}


console.log(`minCount([4, 2, 1]): `, minCount([4, 2, 1]))

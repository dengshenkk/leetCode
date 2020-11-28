var singleNumber = function (nums) {
  console.time('只出现一次的数字')
  let hash = {}
  nums.forEach(item => {
    hash[item] ? hash[item]++ : hash[item] = 1
  })
  for (const hashKey in hash) {
    if (hash[hashKey] === 1) {
      return hashKey
    }
  }
  console.timeEnd('只出现一次的数字')
}


console.log(`singleNumber([4, 1, 2, 1, 2]) :`, singleNumber([4, 1, 2, 1, 2]))

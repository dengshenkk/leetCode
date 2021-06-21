import { removeDuplicates } from '../删除数组中的重复项'


test('示例1 [1,1,2] = 2', () => {
  /**
   输入：nums = [1,1,2]
   输出：2, nums = [1,2]
   */
  expect(removeDuplicates([1, 1, 2])).toBe(2)
})


test('示例2 [0,0,1,1,1,2,2,3,3,4] = 5', () => {
  /**
   输入：nums = [0,0,1,1,1,2,2,3,3,4]
   输出：5, nums = [0,1,2,3,4]
   */
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
})

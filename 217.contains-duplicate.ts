/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const numCount: { [key: number]: boolean } = {};

  for (const num of nums) {
    if (numCount[num]) {
      return true;
    } else {
      numCount[num] = true;
    }
  }

  return false;
}
// @lc code=end

/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j == i) continue;
      if (nums[j] + nums[i] == target) return [j, i];
    }
  }
  return [];
}
// @lc code=end

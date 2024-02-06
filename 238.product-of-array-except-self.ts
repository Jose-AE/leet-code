/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const left: number[] = new Array(nums.length).fill(0);
  const right: number[] = new Array(nums.length).fill(0);
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left[0] = 1; //set 1 at start
    else left[i] = nums[i - 1] * left[i - 1];
  }

  /////
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) right[nums.length - 1] = 1;
    else right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    res.push(left[i] * right[i]);
  }
  return res;
}
// @lc code=end

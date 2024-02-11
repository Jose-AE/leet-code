/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longestSeq = 0;

  for (const num of numsSet.entries()) {
    //o of n
    if (!numsSet.has(num[0] - 1)) {
      let length = 0;
      while (numsSet.has(num[0] + length)) {
        length++;
      }
      longestSeq = Math.max(longestSeq, length);
    }
  }

  return longestSeq;
}
// @lc code=end

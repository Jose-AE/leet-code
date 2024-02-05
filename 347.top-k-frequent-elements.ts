/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start

interface IFrequencyHashTable {
  [key: number]: { number: number; count: number };
}

function topKFrequent(nums: number[], k: number): number[] {
  const frequencyHashTable: IFrequencyHashTable = {};

  for (const number of nums) {
    if (!frequencyHashTable[number])
      frequencyHashTable[number] = { number, count: 0 };

    frequencyHashTable[number] = {
      number: number,
      count: frequencyHashTable[number].count + 1,
    };
  }

  const sortedFrequencies: { number: number; count: number }[] = Object.values(
    frequencyHashTable
  ).sort((a, b) => b.count - a.count);

  const topK: number[] = [];
  for (let i = 0; i < k; i++) {
    topK.push(sortedFrequencies[i].number);
  }

  return topK;
}
// @lc code=end

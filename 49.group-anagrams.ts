/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start

interface IAnagramGroupsHashMap {
  [key: string]: string[];
}

function groupAnagrams(strs: string[]): string[][] {
  const anagramGroupsHashMap: IAnagramGroupsHashMap = {};

  for (const word of strs) {
    const letterCountArray: number[] = new Array(26).fill(0); /// [0: #a, 1: #b...]

    for (const letter of word) {
      const letterIndex = letter.charCodeAt(0) - "a".charCodeAt(0);
      letterCountArray[letterIndex] += 1;
    }

    const key = JSON.stringify(letterCountArray);

    if (!anagramGroupsHashMap[key]) anagramGroupsHashMap[key] = [];

    anagramGroupsHashMap[key].push(word);
  }

  return Object.values(anagramGroupsHashMap);
}

// @lc code=end

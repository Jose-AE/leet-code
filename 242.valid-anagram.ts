/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const lettersS: { [key: string]: number } = {};
  const lettersT: { [key: string]: number } = {};

  if (s.length !== t.length) return false;

  for (const letter of s) {
    lettersS[letter] = (lettersS[letter] || 0) + 1;
  }

  for (const letter of t) {
    lettersT[letter] = (lettersT[letter] || 0) + 1;
  }

  for (const letter of s) {
    if (!lettersT[letter]) return false;

    if (lettersT[letter] !== lettersS[letter]) return false;
  }

  return true;
}
// @lc code=end

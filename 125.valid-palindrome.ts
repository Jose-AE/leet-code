/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (47.65%)
 * Likes:    9191
 * Dislikes: 8323
 * Total Accepted:    3M
 * Total Submissions: 6.3M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric
 * characters.
 * Since an empty string reads the same forward and backward, it is a
 * palindrome.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 *
 *
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let cleanString = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[a-zA-Z0-9]/.test(char)) cleanString += char.toLowerCase();
  }

  let left = 0;
  let right = cleanString.length - 1;
  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// @lc code=end

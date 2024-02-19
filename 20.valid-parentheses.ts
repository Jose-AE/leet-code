/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start

function isValid(s: string): boolean {
  const matchingTypes = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const charStack: string[] = []; //  {

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (matchingTypes[char]) {
      if (
        charStack.length !== 0 &&
        charStack[charStack.length - 1] === matchingTypes[char]
      ) {
        charStack.pop();
      } else return false;
    } else {
      charStack.push(char);
    }
  }

  return charStack.length === 0 ? true : false;
}
// @lc code=end

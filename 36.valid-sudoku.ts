/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const rowNumHashTable = generateNumHashTable();
  const colNumHashTable = generateNumHashTable();
  const cellNumHashTable = generateNumHashTable();

  let currentCellRow = 0;

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    let currentCellCol = 0;

    for (let i = 0; i < board[rowIndex].length; i++) {
      const num = board[rowIndex][i];
      const cellIndex = currentCellRow * 3 + currentCellCol;

      if (num !== ".") {
        //check row
        if (rowNumHashTable[num][i] === false) {
          rowNumHashTable[num][i] = true;
        } else return false;

        //check col
        if (colNumHashTable[num][rowIndex] === false) {
          colNumHashTable[num][rowIndex] = true;
        } else return false;

        //check cell
        if (cellNumHashTable[num][cellIndex] === false) {
          cellNumHashTable[num][cellIndex] = true;
        } else return false;
      }

      if ((i + 1) % 3 === 0) currentCellCol++;
    }

    if ((rowIndex + 1) % 3 === 0) currentCellRow++;
  }

  return true;
}

function generateNumHashTable() {
  return {
    "1": new Array(9).fill(false),
    "2": new Array(9).fill(false),
    "3": new Array(9).fill(false),
    "4": new Array(9).fill(false),
    "5": new Array(9).fill(false),
    "6": new Array(9).fill(false),
    "7": new Array(9).fill(false),
    "8": new Array(9).fill(false),
    "9": new Array(9).fill(false),
  };
}

// @lc code=end

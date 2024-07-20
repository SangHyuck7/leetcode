/**
 * @param {character[][]} board
 * @return {boolean}
 */
 //풀이 실패로 인해 해설 참고
 // 각 행, 열, 3x3 박스가 숫자 1-9를 중복 없이 포함하는지 확인
 // 시간복잡도: O(n)
const isValidSudoku = function(board) {
  const rows = new Array(9).fill(null).map(() => new Set());
  const cols = new Array(9).fill(null).map(() => new Set());
  const boxes = new Array(9).fill(null).map(() => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r][c];

      if (value === '.') continue;

      // 행 검사를 위해 셋에 값 추가
      if (rows[r].has(value)) return false;
      rows[r].add(value);

      // 열 검사를 위해 셋에 값 추가
      if (cols[c].has(value)) return false;
      cols[c].add(value);

      // 3x3 박스 검사를 위해 셋에 값 추가
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (boxes[boxIndex].has(value)) return false;
      boxes[boxIndex].add(value);
    }
  }

  return true;
};
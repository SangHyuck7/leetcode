/**
 * @param {number[][]} mat
 * @return {number}
 */
//시간복잡도:  O(m * n)
//시간복잡도로 인해 해설참고 
const numSpecial = function(mat) {
  let m = mat.length;
  let n = mat[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        let isSpecial = true;

        for (let k = 0; k < n; k++) {
          if (k !== j && mat[i][k] === 1) {
            isSpecial = false;
            break;
          }
        }
         
        for (let k = 0; k < m; k++) {
          if (k !== i && mat[k][j] === 1) {
            isSpecial = false;
            break;
          }
        }

        if (isSpecial) {
          count++;
        }
      }
    }
  }

    return count;
};
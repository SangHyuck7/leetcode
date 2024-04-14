/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

//

//알고리즘 풀이 실패 (풀이 참고) 추후 다시 풀어보기
//BFS, stack을 사용한 알고리즘 풀이법
//시간복잡도: O(m * n) m: 행의 수 n: 열의 수

const updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  const queue = [];

  // 0인 모든 위치를 큐에 추가하고, 해당 위치의 거리를 0으로 설정
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
        dist[r][c] = 0;
      }
    }
  }

  // 방향 벡터 (상, 하, 좌, 우)
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  // BFS 수행
  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (let [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // 경계 확인 및 거리 업데이트
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return dist;
};
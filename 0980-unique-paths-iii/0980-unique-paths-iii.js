/**
 * @param {number[][]} grid
 * @return {number}
 */
//문제풀이 시간초과로 인한 풀이 참조 다시 풀어봐야함
//문제 접근 자료구조: 백트래킹
//시간복잡도: O(4^m*n) 4 = 4방향, m*n = 격자 칸의 크기

const uniquePathsIII = function(grid) {
  let startX = 0; 
  let startY = 0; 
  let emptyCount = 0;
  
  // 초기 상태 설정: 시작점, 끝점 및 비장애물 셀 개수 계산
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        startX = i;
        startY = j;
      } else if (grid[i][j] === 0) {
        emptyCount++;
      }
    }
  }
  
  function backtrack(x, y, remaining) {
    // 그리드 경계를 벗어나거나 장애물에 도달한 경우 되돌아가기
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === -1) {
      return 0;
    }

    // 끝점에 도달했을 때, 모든 비장애물 셀을 방문한 경우 경로 수를 세기
    if (grid[x][y] === 2) {
      return remaining === -1 ? 1 : 0;
    }

    // 현재 셀을 방문 처리
    grid[x][y] = -1;
    remaining--;

    // 네 방향으로 이동
    const totalPaths = backtrack(x + 1, y, remaining) + backtrack(x - 1, y, remaining) + backtrack(x, y + 1, remaining) + backtrack(x, y - 1, remaining);
        
    // 현재 셀을 방문 해제
    grid[x][y] = 0;
    remaining++;

    return totalPaths;
  }
  
  return backtrack(startX, startY, emptyCount);
}
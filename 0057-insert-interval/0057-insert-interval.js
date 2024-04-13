/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// 정확히 풀이 실패 추후 재풀이 필요!
// 시간복잡도 O(n)
const insert = function(intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // 새 구간 시작 전에 끝나는 모든 구간 추가
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 겹치는 모든 구간을 하나로 병합
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // 병합된 구간 추가
  result.push(newInterval);

  // 새 구간과 겹치지 않는 나머지 구간 추가
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

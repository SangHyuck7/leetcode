/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

  // 유클리드 거리 계산법 사용 하지만 상대적 크기만을 비교 하기때문에 제곱 계산x
  // 시간복잡도: O(n) 자바스크립트 엔진 .sort()는 퀵소트 사용 이므로 Olog(n)
  // 다음 풀이에는 시간복잡도 개선을 위해서 직접 정렬 구현 

const kClosest = function(points, k) {
  const distance = (x, y) => x * x + y * y;
  points.sort((a, b) => distance(a[0], a[1]) - distance(b[0], b[1]));

  return points.slice(0, k);
};
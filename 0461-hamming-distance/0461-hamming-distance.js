/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//비트 문제로 이해 부족으로 풀이 참고
//해밍 거리 문제
const hammingDistance = function(x, y) {
  let xor = x ^ y;
  
  let distance = 0;
  
  while (xor !== 0) {
    // 1의 비트에 해밍 거리 증가
    distance += xor & 1;
    // 오른쪽으로 비트를 쉬프트
    xor >>= 1;
  }
  
  return distance;
};
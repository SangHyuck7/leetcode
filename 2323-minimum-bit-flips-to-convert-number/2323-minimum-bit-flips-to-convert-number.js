/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 // ^: XOR 연산자 같은면 1 다르면 0 &: AND 연산자 두비트 같으면 1 다르면 0 <<: 비트를 왼쪽으로 이동하는 연산자
// 해설 참고하여 문제 해결 이진수 표현에서 비트 단위로 작업하는 연산자 사용하여 해결문제
const minBitFlips = function(start, goal) {
  let xorResult = start ^ goal;

  let bitFlips = 0;

  while (xorResult > 0) {
    bitFlips += xorResult & 1;
    xorResult >>= 1;
  }

  return bitFlips;
};
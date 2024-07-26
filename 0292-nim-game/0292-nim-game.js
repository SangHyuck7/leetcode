/**
 * @param {number} n
 * @return {boolean}
 */
 //시간복잡도: O(1)
 //돌의 개수가 4의 배수인지 확인
const canWinNim = function(n) {
  return n % 4 !== 0;
};
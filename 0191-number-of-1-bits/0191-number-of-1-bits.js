/**
 * @param {number} n - a positive integer
 * @return {number}
 
이진수로 변환 
n.toString(2): 이진수로 변환하는 데 O(logn)의 시간이 걸립니다.
String(...): 문자열로 변환하는 데 O(logn)의 시간이 걸립니다.
split(''): 문자열을 문자 배열로 분할하는 데 O(logn)의 시간이 걸립니다.
reduce(...): 배열을 순회하며 덧셈을 수행하는 데 O(logn)의 시간이 걸립니다.
즉 시간 복잡도는  O(logn).
 */

const hammingWeight = function(n) {
  return String(n.toString(2)).split('').reduce((a,b) => Number(a)+Number(b));
};
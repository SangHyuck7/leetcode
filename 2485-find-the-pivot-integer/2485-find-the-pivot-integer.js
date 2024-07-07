/**
 * @param {number} n
 * @return {number}
 */
// 해설 참고 수열의 합공식
// 시간복잡도: O(n)
const pivotInteger = function(n) {
  const totalSum = (n * (n + 1)) / 2;

  let leftSum = 0;

  for (let x = 1; x <= n; x++) {
    leftSum += x;

    const rightSum = totalSum - leftSum + x;

    if (leftSum === rightSum) {
      return x;
    }
  }


  return -1;
};
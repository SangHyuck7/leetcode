/**
 * @param {number[]} nums
 * @return {number}
 */

/*
* 해쉬태이블 자료 구조 사용
* 저장하는 과정 시간복잡도: O(n)
* 해당 값을 가지고 오는 시간 복잡도: O(n)
* 해당 알고리즘의 시간 복잡도: O(n)
*/

const majorityElement = (nums) => {
  const map = {};

  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;

    if (map[n] > nums.length / 2) {
      return n;
    }
  }
};
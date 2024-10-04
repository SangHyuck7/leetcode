/**
 * @param {number[]} skill
 * @return {number}
 */
 //풀이 접근법 실패로 해설참고
 //시간복잡도: O(n log n)
const dividePlayers = function(skill) {
  skill.sort((a, b) => a - b);

  let n = skill.length;
  let targetSum = skill[0] + skill[n - 1];
  let totalChemistry = 0;

  for (let i = 0; i < n / 2; i++) {
    let left = skill[i];
    let right = skill[n - 1 - i];

    // 만약 한 팀의 스킬 합이 다르면 -1 반환
    if (left + right !== targetSum) {
      return -1;
    }

    // 화학적 값(두 스킬의 곱)을 계산하고 합산
    totalChemistry += left * right;
  }

  return totalChemistry;
};
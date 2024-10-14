/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
 // 문제풀이 실패: 접근 방법 실패
 // 그리디 알고리즘 접근
 // 시간복잡도: O(n)
const areSentencesSimilar = function(sentence1, sentence2) {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');

  let i = 0; // 앞에서부터 비교할 인덱스
  let j = 0; // 뒤에서부터 비교할 인덱스

  // 앞에서부터 공통된 단어를 찾음
  while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
    i++;
  }

  // 뒤에서부터 공통된 단어를 찾음
  while (
    j < words1.length - i && 
    j < words2.length - i && 
    words1[words1.length - 1 - j] === words2[words2.length - 1 - j]
  ) {
    j++;
  }

  // 앞(i)과 뒤(j)로 비교한 나머지 부분이 중간 부분에 남았는지 확인
  return i + j >= Math.min(words1.length, words2.length);
};
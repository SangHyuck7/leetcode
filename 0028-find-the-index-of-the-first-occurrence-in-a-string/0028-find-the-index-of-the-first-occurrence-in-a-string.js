/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//간단하게 indexOf로 풀었으나 더 좋은 효율을 가지고 있는 KMP(Knuth-Morris-Pratt) 알고리즘 있다.
//KMP(Knuth-Morris-Pratt) 알고리즘은 문자열 검색 문제를 효율적으로 해결하는 알고리즘 중 하나로, 부분 일치 테이블(또는 LPS, Longest Prefix Suffix)을 사용하여 불필요한 비교를 줄여준다
//KMP(Knuth-Morris-Pratt) 알고리즘으로 풀어봤으나 이해부족으로 풀이 실패 재도전 예정
const strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
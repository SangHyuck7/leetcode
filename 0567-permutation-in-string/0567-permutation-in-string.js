/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 
 //최종 시간 복잡도: O(n1 + n2) n1은 s1의 길이, n2는 s2의 길이
const checkInclusion = function(s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;

  if (n1 > n2) return false;

  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);

  //a의 ASCII코드의 값으로 배열 저장
  for (let i = 0; i < n1; i++) {
    count1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
 
 //알파벳 빈도 확인 함수
  const matches = (count1, count2) => {
    for (let i = 0; i < 26; i++) {
      if (count1[i] !== count2[i]) return false;
    }
  
    return true;
  };

  if (matches(count1, count2)) return true;

  for (let i = n1; i < n2; i++) {
    count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count2[s2.charCodeAt(i - n1) - 'a'.charCodeAt(0)]--;

    if (matches(count1, count2)) return true;
  }

  return false;
};
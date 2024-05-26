/**
 * @param {number} n
 * @return {boolean}
 */

//시간복잡도: O(n)

//진수 변환 함수
const convertToBase = (n, base) => {
  return n.toString(base);
}
//Palindrome확인 함수
const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

const isStrictlyPalindromic = (n) => {
  for (let base = 2; base <= n - 2; base++) {
    const baseStr = convertToBase(n, base);
    
    if (!isPalindrome(baseStr)) {
      return false;
    }
  }
  
  return true;
}
/**
 * @param {string} s
 * @return {string}
 */
 //조건 같은문자의 대문자소문자가 동일한경우 문자 2개 제거
 //스택 구조 사용
 //시간복잡도: O(n)
const makeGood = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (stack.length > 0) {
      let lastChar = stack[stack.length - 1];

      if (lastChar.toLowerCase() === currentChar.toLowerCase() && lastChar !== currentChar) {
        stack.pop();
      } else {
        stack.push(currentChar);
      }
    } else {
      stack.push(currentChar);
    }
  }

  return stack.join('');
};
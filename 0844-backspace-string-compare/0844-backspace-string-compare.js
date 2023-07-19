/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//시간복잡도: O(n)
const backspaceCompare = function(s, t) {
  if (s === t) return true;
  
  const stackS = [];
  const stackT = [];
  
  for (let S of s) {
    if (S !== '#') stackS.push(S);
    else stackS.pop();
    }

  for (let T of t) {
    if (T !== '#') stackT.push(T);
    else stackT.pop();
    }

  return stackS.join('') === stackT.join('');
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 반복되는 문자 찾는거 X
// 시간 복잡도 : O(N)

const canConstruct = function(ransomNote, magazine) {
  let n = [...ransomNote.split('')];
  let m = [...magazine.split('')];
  let match = 0;
  
  for (let i = 0; i < n.length; i++) {    
    if (m.indexOf(n[i]) !== -1) {      
      match++;
      m.splice(m.indexOf(n[i]), 1)      
    }
  }
  
  return match === n.length
};
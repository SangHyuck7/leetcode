/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
    
  const count = new Array(26).fill(0);
    
  for (let i = 0; i < ransomNote.length; i++) {
    count[ransomNote.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < magazine.length; i++) {
    count[magazine.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  
  for (let i = 0; i < count.length; i++) {
    if (1 <= count[i]) return false;
  }
    return true;
};




/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 해쉬구조 사용
// 시간복잡도: O(n) 시간복잡도는 동일 하지만 순서 보장 때문에 객체가 아닌 map 사용
const groupAnagrams = function(strs) {
 const map = new Map();
  
  for (let str of strs) {
    const sortStr = str.split('').sort().join('');
    
    if (!map.has(sortStr)) {
      map.set(sortStr, []);
    }

    map.get(sortStr).push(str);
  }
  
   return Array.from(map.values());
};
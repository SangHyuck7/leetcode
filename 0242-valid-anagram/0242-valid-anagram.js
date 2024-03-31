/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const sResult = s.split("").sort().join("");
  const tResult = t.split("").sort().join("");

  if (sResult === tResult) {
    return true;
  }

  return false;
};
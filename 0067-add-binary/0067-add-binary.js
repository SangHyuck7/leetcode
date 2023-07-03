/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const binaryA = `0b${a}`;
  const binaryB = `0b${b}`;
  const sum = BigInt(binaryA) + BigInt(binaryB);
  
  return sum.toString(2)
};
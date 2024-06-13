/**
 * @param {string} command
 * @return {string}
 */
//시간복잡도: O(n)
const interpret = function(command) {
  let result = "";
  let count = 0;
  
  while (count < command.length) {
    if (command[count] === 'G') {
      result += 'G';
      count += 1;
    } else if (command[count] === '(' && command[count + 1] === ')') {
      result += 'o';
      count += 2;
    } else if (command[count] === '(' && command[count + 1] === 'a' && command[count + 2] === 'l' && command[count + 3] === ')') {
      result += 'al';
      count += 4;
    }
  }
  
  return result;
};
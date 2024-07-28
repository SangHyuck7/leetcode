/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 //시간복잡도: O(n)
const reconstructQueue = function(people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

  const result = [];

  for (let person of people) {
    result.splice(person[1], 0, person);
  }

  return result;
};
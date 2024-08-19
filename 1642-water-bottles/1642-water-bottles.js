/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 //문제이해부족으로 시간초과 해설 참고
 //시간복잡도 O(log n) n = numBottles
const numWaterBottles = function(numBottles, numExchange) {
  let totalDrank = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    let newBottles = Math.floor(emptyBottles / numExchange);
    totalDrank += newBottles;
    emptyBottles = emptyBottles % numExchange + newBottles;
  }

  return totalDrank;
};
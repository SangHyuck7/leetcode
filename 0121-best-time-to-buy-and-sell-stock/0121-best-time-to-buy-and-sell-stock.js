/**
 * @param {number[]} prices
 * @return {number}
 */
 //시간 복잡도: O(n)
const maxProfit = function (prices) {
  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (i !== prices.length - 1 && prices[i] <= buy) {
      sell = prices[i];
      buy =  prices[i];
    } else if (prices[i] > sell) {
      sell = prices[i];
    }

    profit = sell - buy > profit ? sell - buy : profit;
  }

  return profit;
};
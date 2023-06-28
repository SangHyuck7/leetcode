/**
 * @param {number[]} prices
 * @return {number}
 */
//시간복잡도 O(n)
const maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfitSoFar = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfitSoFar) {
            maxProfitSoFar = prices[i] - minPrice;
        }
    }

    return maxProfitSoFar;
};
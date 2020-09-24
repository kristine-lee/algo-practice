/* from https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3464/ */
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.


function maxProfit(prices) {
  let maxPrice = 0
  for (let i = 0; i < prices.length; i++){
    for (let j= i+1; j < prices.length; j++){
      if (prices[j] - prices[i] > maxPrice) {
        maxPrice = prices[j] - prices[i]
      }
    }
  } return maxPrice
}

//brute force solution: O(n^2)

function maxProfitOptimized(prices) {
  let maxProfit = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    let p = prices[i]
    maxProfit = Math.max(maxProfit, p - minPrice);
    minPrice = Math.min(minPrice, p);
  }
  return maxProfit
}

//optimzied solution: O(n)

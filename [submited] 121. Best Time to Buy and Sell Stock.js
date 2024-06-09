var maxProfit = function (prices) {
  const min = Math.min(...prices);

  const indexOfMin = prices.indexOf(min);

  const pricesAfterMin = prices.slice(indexOfMin + 1, prices.length);

  if (pricesAfterMin.length === 0) return 0;

  const max = Math.max(...pricesAfterMin);

  //console.log(min, pricesAfterMin, max);

  return max - min;
};

maxProfit([7, 6, 4, 3, 1]);

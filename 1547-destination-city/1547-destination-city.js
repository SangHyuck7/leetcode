/**
 * @param {string[][]} paths
 * @return {string}
 */
 //시간복잡도: O(n)
const destCity = function(paths) {
  const startCities = new Set();

  for (const [cityA, cityB] of paths) {
    startCities.add(cityA);
  }

  for (const [cityA, cityB] of paths) {
    if (!startCities.has(cityB)) {
      return cityB;
    }
  }

  return null;
};
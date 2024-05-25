/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
//시간복잡도: O(n)
 const numJewelsInStones = (jewels, stones) => {
    const jewelSet = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
};
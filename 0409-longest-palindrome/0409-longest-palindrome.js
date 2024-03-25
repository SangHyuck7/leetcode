/**
 * @param {string} s
 * @return {number}
 */

//시간복잡도: O(n)

const longestPalindrome = function(s) {
    let pairs = {}
    let count = 0;
    for (let c of s) { 
        if (pairs[c]) {
            count += 2;
            pairs[c] = false; // 불필요 키값 의미 x
        } else {
            pairs[c] = true; // 불필요 키값 의미 x
        }
    }
    return count + ((count >= s.length) ? 0 : 1);
};

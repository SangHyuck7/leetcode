/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let charMap = {};
    let start = 0;
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        } else {
            longest = Math.max(longest, i - start + 1);
        }

        charMap[currentChar] = i;
    }

    return longest;
};
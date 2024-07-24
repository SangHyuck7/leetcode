/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 //시간복잡도: O(n)
 // JavaScript 객체의 키로 “constructor”를 사용하는 경우 문제가 발생 하여 객체에서 Map으로 사용
 const wordPattern = function(pattern, s) {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }
  
  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWord.has(char)) {
      if (charToWord.get(char) !== word) {
        return false;
      }
    } else {
      charToWord.set(char, word);
    }

    if (wordToChar.has(word)) {
      if (wordToChar.get(word) !== char) {
        return false;
      }
    } else {
      wordToChar.set(word, char);
    }
  }

  return true;
};
// const wordPattern = function(pattern, s) {
//   const words = s.split(' ');

//   if (pattern.length !== words.length) {
//     return false;
//   }
  
//   const charToWord = {};
//   const wordToChar = {};

//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     const word = words[i];

//     if (charToWord[char] !== undefined) {
//       if (charToWord[char] !== word) {
//         return false;
//       }
//     } else {
//       charToWord[char] = word;
//     }

//     if (wordToChar[word] !== undefined) {
//       if (wordToChar[word] !== char) {
//         return false;
//       }
//     } else {
//       wordToChar[word] = char;
//     }
//   }
//
//   return true;
// };
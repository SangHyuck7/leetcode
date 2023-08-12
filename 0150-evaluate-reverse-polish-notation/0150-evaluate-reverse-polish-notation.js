/**
 * @param {string[]} tokens
 * @return {number}
 */

const operators = {
    '+': (a, b) => b + a,
    '-': (a, b) => b - a,
    '*': (a, b) => b * a,
    '/': (a, b) => parseInt(b / a)
};

/**
 * @param {string[]} tokens
 * @return {number}
 */

//시간 복잡도 O(n)
function evalRPN (tokens) {
  const x = tokens.pop();

  return operators[x] ? operators[x](evalRPN(tokens), evalRPN(tokens)) : parseInt(x);
}

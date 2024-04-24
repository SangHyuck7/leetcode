/**
 * @param {string[]} tokens
 * @return {number}
 */
//시간 복잡도: 모든 요소 순회 O(n);
//FILO 스택구조 사용;
const evalRPN = function(tokens) {
  const stack = [];
  
  tokens.forEach(tokens => {
    if (!isNaN(tokens)) {
      stack.push(parseInt(tokens, 10));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      
      switch (tokens) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  });
  
  return stack.pop();
};
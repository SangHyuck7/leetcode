/**
 * @param {string} s
 * @return {boolean}
 */

//LIFO - Last in First Out
const isValid = function(s) {
    const stack = [];
    
    for (let c of s) { 
        if (c === '(' || c === '{' || c === '[') { 
            stack.push(c);
        } else { 
            if (!stack.length || 
                (c === ')' && stack[stack.length - 1] !== '(') || 
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length; 
};


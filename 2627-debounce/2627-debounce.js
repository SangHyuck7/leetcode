/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
  let timeoutID;
  
  return function(...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
      
    timeoutID = setTimeout(() => {
      fn(...args);
    }, t);
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
 //비동기 문제 await 와 Promise.all로 해결 가능
const addTwoPromises = async function(promise1, promise2) {
  const result1 = await promise1;
  const result2 = await promise2;

  return result1 + result2;
};

// const addTwoPromises = async function(promise1, promise2) {
//   return Promise.all([promise1, promise2])
//     .then(values => { // values는 [value1, value2] 형태
  
//     return values[0] + values[1];
//   });
// };

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
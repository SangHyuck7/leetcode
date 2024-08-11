/**
 * @param {string} coordinates
 * @return {boolean}
 */
 //시간복잡되: O(n)
const squareIsWhite = function(coordinates) {
  const column = coordinates[0];
  const row = parseInt(coordinates[1]);

  //열의 원하는 숫자를 얻기위해 유니코드 사용
  const columnNumber = column.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

  //결과가 짝수면 휜 홀수면 검정
  return (columnNumber + row) % 2 !== 0;
};
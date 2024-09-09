/**
 * @param {string} date
 * @return {string}
 */
//.map(Number) 을통해서 각각의 부분을 숫자로 변환이 가능
const convertDateToBinary = function(date) {
  const [year, month, day] = date.split('-').map(Number);

  const yearBinary = year.toString(2);
  const monthBinary = month.toString(2);
  const dayBinary = day.toString(2);

  return `${yearBinary}-${monthBinary}-${dayBinary}`;
};
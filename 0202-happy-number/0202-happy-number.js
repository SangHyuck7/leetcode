/**
 * @param {number} n
 * @return {boolean}
 */

// set으로 해쉬테이블 사용 무한 루프 파지는 것을 확인
// 시간 복잡도는 O(n * m) n=자리수 m=1까지 도달 혹은 무한 루프 빠지는 단계 수

const isHappy = function(n) {
  const seen = new Set();
  
  const getNext = (number) => {
    let totalSum = 0;
    
    while (number > 0) {
      let digit = number % 10;
      totalSum += digit * digit;
      number = Math.floor(number / 10);
    }
    return totalSum;
  }

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  
  return n === 1;
};
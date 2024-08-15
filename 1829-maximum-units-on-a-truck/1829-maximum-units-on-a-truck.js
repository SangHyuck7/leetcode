/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 //풀이참고
 //그리드알고리즘 기법: 매 순간 가장 최적이라고 판단되는 선택을 함으로써, 전체 문제의 최적해를 구하려는 알고리즘 기법
 //시간복잡도: O(n)
const maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let totaltiem = 0;

  for (let [numberOfBoxes, itemPerBox] of boxTypes) {
    if (truckSize <= 0) break;

    const boxesInTruck = Math.min(truckSize, numberOfBoxes);
    
    totaltiem += boxesInTruck * itemPerBox;
    truckSize -= boxesInTruck;
  }

  return totaltiem;
};
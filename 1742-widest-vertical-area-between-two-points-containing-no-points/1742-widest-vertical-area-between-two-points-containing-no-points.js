/**
 * @param {number[][]} points
 * @return {number}
 */
 /**
 문제이해 부족
 	•	수직 영역은 y축을 따라 무한히 뻗어있는 너비가 고정된 영역을 말합니다.
	•	이 영역의 너비는 x축에서의 두 점 사이의 거리에 따라 결정됩니다.
	•	목표는 주어진 점들 중 두 점 사이에 다른 점이 없는 수직 영역 중에서 가장 넓은 영역의 너비를 찾는 것입니다.
	•	이때 두 수직선이 어떤 점들을 포함하지 않는지 여부가 중요하며, 이 문제에서는 경계에 있는 점은 포함하지 않는 것으로 간주됩니다.
 */
 //시간복잡도: O(n log n)
const maxWidthOfVerticalArea = function(points) {
  const xCoords = points.map(point => point[0]);
    
  xCoords.sort((a, b) => a - b);
    
  let maxWidth = 0;

  for (let i = 1; i < xCoords.length; i++) {
    const width = xCoords[i] - xCoords[i - 1];
    maxWidth = Math.max(maxWidth, width);
  }
    
  return maxWidth;
};
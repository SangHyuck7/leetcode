/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
//DFS방식으로 접근
//시간복잡도 O(m*n) 

const floodFill = function(image, sr, sc, color) {
  const targetColor = image[sr][sc];
  
  if (targetColor === color) return image;

  const changeColor = function(sr, sc) {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== targetColor) {        return;
    }
    
  image[sr][sc] = color;
    
  changeColor(sr, sc - 1);
  changeColor(sr, sc + 1);
  changeColor(sr - 1, sc);
  changeColor(sr + 1, sc);
  };
  
  changeColor(sr, sc);
  
  return image;
};

/*
* 왼쪽: sr: 유지, sc: -1 
* 오른쪽: sr: 유지, sc: +1
* 위: sr: -1, sc: 유지
* 아레 sr: +1, sc: 유지
*/
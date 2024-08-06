/**
 * @param {number[][]} image
 * @return {number[][]}
 */
//시간복잡도 O(n*2)
const flipAndInvertImage = function(image) {
  //각행 뒤집기
  for (let row = 0; row < image.length; row++) {
    image[row].reverse();
    
    //각행 요소 반전
    for (let col = 0; col < image[row].length; col++) {
      image[row][col] = image[row][col] === 0 ? 1 : 0;
    }
  }
  
  return image;
};
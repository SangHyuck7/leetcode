/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
//BFS 이해부족
function initializeQueueAndNewMatrix(mat){
    let queue = []; 
    let newMat = new Array(mat.length); 
    
    for (let row = 0; row < mat.length; row++){
        // Go through matrix.
        newMat[row] = new Array(mat[row].length);
        
        for (let col = 0; col < mat[row].length; col++){
            if(mat[row][col] === 0){

                queue.push([row,col]);
                newMat[row][col] = 0;
            } else {
                newMat[row][col] = Number.POSITIVE_INFINITY;
            }
        }
    }
    return [queue, newMat];
}
/*
 * Checks if a position is inbounds of the mat array and its value is not 0.
 * @param {number} row number
 * @param {number} col number
 * @param {number[][]} mat 
 * @return {boolean} true if is a valid position, else false.
 */
function isValidPos(row, col, mat, newMat, currDistance) {
    return row > -1 && row < mat.length && col > -1 && col < mat[row].length && currDistance < newMat[row][col];
}
/**
 * Time: O(m*n): We go through the matrix array twice.
 * Space: O(m*n): The worst case space for our bfs queue.
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(mat) {
    let [queue, newMat] = initializeQueueAndNewMatrix(mat);
    
    const travelPos = [[1,0],[0,1],[0,-1],[-1,0]];
    let distance = 1;                
    
    while(queue.length !== 0){
        const currentQueueSize = queue.length;

        for(let i = 0; i < currentQueueSize; i++){

            let [currRow, currCol] = queue.shift();

            for(let [moveRow, moveCol] of travelPos){

                moveRow = currRow + moveRow; 
                moveCol = currCol + moveCol;  

                if(isValidPos(moveRow, moveCol, mat, newMat, distance)){

                    newMat[moveRow][moveCol] = distance;
                    queue.push([moveRow,moveCol]);
                }
            }
        }
        distance++;   
    }
    return newMat;
}
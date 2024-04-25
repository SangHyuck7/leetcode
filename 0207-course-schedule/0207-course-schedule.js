/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// numCourses는 총과목 수 이지만 수의 범위로 지정해야한다!

// 시간 문제로 문제 풀이 실패 해설 참조
// 그래프의  위상 정렬, 진입차수로 접근 해야한다.
const canFinish = function(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill(null).map(() => []);
  
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course);
    indegree[course]++; //진입 차수 이값이 0이여야 수강가능
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  
  let count = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    
    count++;

    for (let next of graph[current]) {
      indegree[next]--;
            
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return count === numCourses;
};
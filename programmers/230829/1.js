// 공 이동 시뮬레이션

// n행 m열의 격자가 있습니다. 격자의 각 행은 0, 1, ..., n-1번의 번호, 그리고 각 열은 0, 1, ..., m-1번의 번호가 순서대로 매겨져 있습니다. 당신은 이 격자에 공을 하나 두고, 그 공에 다음과 같은 쿼리들을 날리고자 합니다.
// 열 번호가 감소하는 방향으로 dx칸 이동하는 쿼리 (query(0, dx))
// 열 번호가 증가하는 방향으로 dx칸 이동하는 쿼리 (query(1, dx))
// 행 번호가 감소하는 방향으로 dx칸 이동하는 쿼리 (query(2, dx))
// 행 번호가 증가하는 방향으로 dx칸 이동하는 쿼리 (query(3, dx))
// 단, 공은 격자 바깥으로 이동할 수 없으며, 목적지가 격자 바깥인 경우 공은 이동하다가 더 이상 이동할 수 없을 때 멈추게 됩니다. 예를 들어, 5행 × 4열 크기의 격자 내의 공이 3행 2열에 있을 때 query(3, 10) 쿼리를 받은 경우 공은 4행 2열에서 멈추게 됩니다. (격자의 크기가 5행 × 4열이므로, 0~4번 행과 0~3번 열로 격자가 구성되기 때문입니다.)
// 격자의 행의 개수 n, 열의 개수 m, 정수 x와 y, 그리고 쿼리들의 목록을 나타내는 2차원 정수 배열 queries가 매개변수로 주어집니다. n × m개의 가능한 시작점에 대해서 해당 시작점에 공을 두고 queries 내의 쿼리들을 순서대로 시뮬레이션했을 때, x행 y열에 도착하는 시작점의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(n, m, x, y, queries) {
  var answer = 0;

  let size = queries.length;
  let row_start = x;
  let row_end = x;
  let col_start = y;
  let col_end = y;
  
  for (let i = size - 1; i >= 0; i--) {

    let dir = queries[i][0];
    let dist = queries[i][1];
      
    if (dir === 0) {
      if (col_start !== 0) {
        col_start = col_start + dist;
      }
      
      col_end = col_end + dist;

      if (col_end > m - 1) {
        col_end = m - 1;
      } 
    } else if (dir === 1) {
      col_start = col_start - dist;

      if (col_start < 0) {
        col_start = 0;
      }
      
      if (col_end !== m - 1) {
        col_end = col_end - dist;
      }
    } else if (dir === 2) {
      if (row_start !== 0) {
        row_start = row_start + dist;
      }
      
      row_end = row_end + dist;

      if (row_end > n - 1) {
        row_end = n - 1;
      }
    } else if (dir === 3) {
      row_start = row_start - dist;   

      if (row_start < 0) {
        row_start = 0;
      }
      
      if (row_end !== n - 1) {
        row_end = row_end - dist;
      } 
    }
    
    if (row_start > n - 1 || row_end < 0 || col_start > m - 1 || col_end < 0) {
      return answer;
    }
    
  }
  
  answer = BigInt((row_end - row_start + 1)) * BigInt((col_end - col_start + 1));

  return answer;
}

console.log(solution(2, 2, 0, 0, [[2,1],[0,1],[1,1],[0,1],[2,1]])) // 4
console.log(solution(2, 5, 0, 1, [[3,1],[2,2],[1,1],[2,3],[0,1],[2,1]])) // 2
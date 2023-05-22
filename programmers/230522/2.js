// 수열과 구간 쿼리 4

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, queries) {
  var answer = [];

  queries.map( (el) => {
    arr.map( (element, index) => {
      if (el[0] <= index && el[1] >= index) {
        if (index % el[2] === 0) {
          arr[index] = arr[index] + 1;
        }
      }
    });
  });
  
  answer = arr.slice();

  return answer;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]])) // [3, 2, 4, 6, 4]
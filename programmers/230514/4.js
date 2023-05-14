// n 번째 원소부터

// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = [];

  answer = num_list.slice(n - 1, num_list.length);

  return answer;
}

console.log(solution([2, 1, 6], 3)) // [6]
console.log(solution([5, 2, 1, 7, 5], 2)) // [2, 1, 7, 5]
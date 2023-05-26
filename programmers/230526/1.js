// n의 배수

// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num, n) {
  var answer = 0;

  num % n === 0 ? answer = 1 : answer = 0;

  return answer;
}

console.log(solution(98, 2)) // 1
console.log(solution(34, 3)) // 0
// 짝수와 홀수

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution(num) {
  var answer = '';

  if (num % 2 === 0) {
    answer = "Even"
  } else {
    answer = "Odd"
  }

  return answer;
}

console.log(solution(3)) // "Odd"
console.log(solution(4)) // "Even"
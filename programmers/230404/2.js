// 두 수의 차

// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
  var answer = 0;

  answer = num1 - num2;

  return answer;
}

console.log(solution(2, 3)); // -1
console.log(solution(100, 2)); // 98
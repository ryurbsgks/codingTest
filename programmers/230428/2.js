// 연속된 수의 합

// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  var answer = [];

  let first = Math.ceil(total / num - Math.floor(num / 2));

  for (let i = first; i < first + num; i++) {
    answer.push(i);
  }

  return answer;
}

console.log(solution(3, 12)) // [3, 4, 5]
console.log(solution(5, 15)) // [1, 2, 3, 4, 5]
console.log(solution(4, 14)) // [2, 3, 4, 5]
console.log(solution(5, 5)) // [-1, 0, 1, 2, 3]
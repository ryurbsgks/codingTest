// N개의 최소공배수

// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

function solution(arr) {
  var answer = 0;

  let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);

  answer = arr.reduce( (a, b) => (a * b) / GCD(a, b));

  return answer;
}

console.log(solution([2,6,8,14])) // 168
console.log(solution([1,2,3])) // 6
// A로 B 만들기

// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
  var answer = 0;

  before.split("").sort().join("") === after.split("").sort().join("") ? answer = 1 : answer = 0;

  return answer;
}

console.log(solution("olleh", "hello")) // 1
console.log(solution("allpe", "apple")) // 0
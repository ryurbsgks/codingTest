// 올바른 괄호의 갯수

// 올바른 괄호란 (())나 ()와 같이 올바르게 모두 닫힌 괄호를 의미합니다. )(나 ())() 와 같은 괄호는 올바르지 않은 괄호가 됩니다. 괄호 쌍의 개수 n이 주어질 때, n개의 괄호 쌍으로 만들 수 있는 모든 가능한 괄호 문자열의 갯수를 반환하는 함수 solution을 완성해 주세요.

function solution(n) {
  var answer = 0;

  let arr = new Array(n + 1).fill(0);

  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[j - 1] * arr[i - j];
    }
  }

  answer = arr[n];

  return answer;
}

console.log(solution(2)) // 2
console.log(solution(3)) // 5
// 약수의 합

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  var answer = 0;

  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  answer = arr.reduce( (acc, cur) => acc + cur, 0);

  return answer;
}

console.log(solution(12)) // 28
console.log(solution(5)) // 6
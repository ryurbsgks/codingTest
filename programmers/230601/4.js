// 소수 찾기

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

function solution(n) {
  var answer = 0;

  let arr = Array(n + 1).fill(true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        arr[j] = false;
      }
    }
  }

  answer = arr.filter( (el) => el).length;

  return answer;
}

console.log(solution(10)) // 4
console.log(solution(5)) // 3
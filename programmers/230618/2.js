// 124 나라의 숫자

// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.
// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

function solution(n) {
  var answer = '';

  let arr = [4, 1, 2];

  while (n > 0) {
    answer = arr[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}

console.log(solution(1)) // 1
console.log(solution(2)) // 2
console.log(solution(3)) // 4
console.log(solution(4)) // 11
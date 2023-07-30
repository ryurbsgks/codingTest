// 숫자 변환하기

// 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.
// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

function solution(x, y, n) {
  var answer = 0;

  let arr = new Array(y + 1).fill(Infinity);

  arr[x] = 0;

  for (let i = x; i <= y; i++) {
    arr[i + n] = Math.min(arr[i + n], arr[i] + 1);
    arr[i * 2] = Math.min(arr[i * 2], arr[i] + 1);
    arr[i * 3] = Math.min(arr[i * 3], arr[i] + 1);
  }

  answer = arr[y] !== Infinity ? arr[y] : -1

  return answer;
}

console.log(solution(10, 40, 5)) // 2
console.log(solution(10, 40, 30)) // 1
console.log(solution(2, 5, 4)) // -1
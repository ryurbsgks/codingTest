// 야근 지수

// 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

function solution(n, works) {
  var answer = 0;

  if (works.reduce( (acc, cur) => acc + cur) <= n) {
    return answer;
  }

  let arr = works.sort( (a, b) => a - b);
  let length = works.length;

  while (n) {

    let max = arr[length - 1];

    for (let i = length - 1; i >= 0; i--) {
      if (arr[i] >= max) {
        arr[i]--;
        n--;
      }

      if (!n) {
        break;
      }
    }

  }

  answer = arr.reduce( (acc, cur) => acc + Math.pow(cur, 2), 0);

  return answer;
}

console.log(solution(4, [4, 3, 3])) // 12
console.log(solution(1, [2, 1, 2])) // 6
console.log(solution(3, [1, 1])) // 0
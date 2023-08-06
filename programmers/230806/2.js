// 거스름돈

// Finn은 편의점에서 야간 아르바이트를 하고 있습니다. 야간에 손님이 너무 없어 심심한 Finn은 손님들께 거스름돈을 n 원을 줄 때 방법의 경우의 수를 구하기로 하였습니다.
// 예를 들어서 손님께 5원을 거슬러 줘야 하고 1원, 2원, 5원이 있다면 다음과 같이 4가지 방법으로 5원을 거슬러 줄 수 있습니다.
// 1원을 5개 사용해서 거슬러 준다.
// 1원을 3개 사용하고, 2원을 1개 사용해서 거슬러 준다.
// 1원을 1개 사용하고, 2원을 2개 사용해서 거슬러 준다.
// 5원을 1개 사용해서 거슬러 준다.
// 거슬러 줘야 하는 금액 n과 Finn이 현재 보유하고 있는 돈의 종류 money가 매개변수로 주어질 때, Finn이 n 원을 거슬러 줄 방법의 수를 return 하도록 solution 함수를 완성해 주세요.

function solution(n, money) {
  var answer = 0;

  let arr = [1, ...new Array(n).fill(0)];

  for (let i = 0; i < money.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) {
        arr[j] = (arr[j] + arr[j - money[i]]) % 1000000007;
      }
    }
  }

  answer = arr[n];

  return answer;
}

console.log(solution(5, [1,2,5])) // 4
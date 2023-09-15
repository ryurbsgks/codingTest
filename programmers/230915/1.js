// 도둑질

// 도둑이 어느 마을을 털 계획을 하고 있습니다. 이 마을의 모든 집들은 아래 그림과 같이 동그랗게 배치되어 있습니다.
// 각 집들은 서로 인접한 집들과 방범장치가 연결되어 있기 때문에 인접한 두 집을 털면 경보가 울립니다.
// 각 집에 있는 돈이 담긴 배열 money가 주어질 때, 도둑이 훔칠 수 있는 돈의 최댓값을 return 하도록 solution 함수를 작성하세요.

function solution(money) {
  var answer = 0;

  let length = money.length;
  let arr = new Array(length).fill(0);
  let newArr = new Array(length).fill(0);

  arr[0] = money[0];
  arr[1] = money[0];
  newArr[0] = 0;
  newArr[1] = money[1];

  for (let i = 2; i < length - 1; i++) {
    arr[i] = Math.max(arr[i - 2] + money[i], arr[i - 1]);
  }

  for (let i = 2; i < length; i++) {
    newArr[i] = Math.max(newArr[i - 2] + money[i], newArr[i - 1]);
  }

  answer = Math.max(arr[length - 2], newArr[length - 1]);

  return answer;
}

console.log(solution([1, 2, 3, 1])) // 4
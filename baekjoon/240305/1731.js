// 등차가 정수인 등차수열 (어떤 수에 차례대로 일정한 수를 더해서 이루어지는 수열) 은 2개의 숫자로 나타낼 수 있다. P는 수열의 첫 번째 수이고, Q는 그 다음수가 되기 위해 바로 전의 수에 더해야 하는 수이다. 예를 들어 P=1, Q=2 이면 그 등차수열은 1, 3, 5, 7, ..... 이 된다.
// 등비가 정수인 등비수열 (어떤 수에서 시작해 차례로 같은 수를 곱하여 만든 수열) 은 등차수열과 비슷하게 2개의 숫자로 나타낼 수 있다. P는 수열의 첫 번째 수이고, Q는 그 다음수가 되기 위해 바로 전의 수에 곱해야 하는 수이다. 예를 들어 P=3, Q=2이면 그 등비수열은 3, 6, 12, ...이 된다.
// 테디는 세상에서 수학을 제일 좋아해서 매일같이 이 수열이 등차수열인지 등비수열인지 정한다음에 다음 수를 구한다.
// 어떤 수열이 주어졌을 때, 그 수열의 규칙이 등차수열인지, 등비수열인지 결정한 후에, 다음에 등장할 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let arr = input.map( (el) => Number(el));
  let N = arr.shift();
  let answer = arr[N - 1];

  if (arr[2] - arr[1] === arr[1] - arr[0]) {
    answer += (arr[1] - arr[0]);
  } else if (Math.floor(arr[2] / arr[1]) === Math.floor(arr[1] / arr[0])) {
    answer *= Math.floor(arr[1] / arr[0]);
  }

  return answer;
}

console.log(solution());
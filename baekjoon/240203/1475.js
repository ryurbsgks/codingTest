// 다솜이는 은진이의 옆집에 새로 이사왔다. 다솜이는 자기 방 번호를 예쁜 플라스틱 숫자로 문에 붙이려고 한다.
// 다솜이의 옆집에서는 플라스틱 숫자를 한 세트로 판다. 한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최솟값을 출력하시오. (6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let arr = Array(10).fill(0);
  let max = 0;

  while (N > 0) {
    arr[N % 10]++;
    N = Math.floor(N / 10);
  }

  arr[6] = Math.ceil((arr[6] + arr[9]) / 2);

  for (let i = 0; i < 9; ++i) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

console.log(solution(Number(input)));
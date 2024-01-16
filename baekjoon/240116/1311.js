// N명의 사람과 N개의 일이 있다. 각 사람은 일을 하나 담당해야 하고, 각 일을 담당하는 사람은 한 명 이어야 한다. 또한, 모든 사람은 모든 일을 할 능력이 있다.
// 사람은 1번부터 N번까지 번호가 매겨져 있으며, 일도 1번부터 N번까지 번호가 매겨져 있다.
// Dij를 i번 사람이 j번 일을 할 때 필요한 비용이라고 했을 때, 모든 일을 하는데 필요한 비용의 최솟값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N, arr) {

  let newArr = new Array(1 << N).fill(Math.pow(10, 6));

  newArr[0] = 0;

  for (let i = 0; i < (1 << N); i++) {

    let n = 0;
    
    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        n++;
      }
    }

    for (let j = 0; j < N; j++) {
      if ((i & (1 << j)) === 0 && newArr[i | (1 << j)] > newArr[i] + arr[n][j]) {
        newArr[i | (1 << j)] = newArr[i] + arr[n][j];
      }
    }

  }

  return newArr[(1 << N) - 1];
}

console.log(solution(Number(input[0]), newInput.map( (el) => el.split(" ").map( (element) => Number(element)))));
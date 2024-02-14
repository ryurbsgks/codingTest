// 45656이란 수를 보자.
// 이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다.
// N이 주어질 때, 길이가 N이면서 0부터 9까지 숫자가 모두 등장하는 계단 수가 총 몇 개 있는지 구하는 프로그램을 작성하시오. 0으로 시작하는 수는 계단수가 아니다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = 0;
  let mod = 1000000000;
  let arr = new Array(N).fill(null).map( () => new Array(10).fill(null).map( () => new Array(1 << 10).fill(0)));

  for (let i = 1; i < 10; i++) {
    arr[0][i][1 << i] = 1;
  }

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 1024; k++) {
        if (j - 1 >= 0) {
          arr[i][j][k | (1 << j)] += arr[i - 1][j - 1][k];
          arr[i][j][k | (1 << j)] %= mod;
        }

        if (j + 1 <= 9) {
          arr[i][j][k | (1 << j)] += arr[i - 1][j + 1][k];
          arr[i][j][k | (1 << j)] %= mod;
        }
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    answer += arr[N - 1][i][1023];
    answer %= mod;
  }

  return answer;
}

console.log(solution(Number(input)));
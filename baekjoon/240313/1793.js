// 2×n 직사각형을 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
// 아래 그림은 2×17 직사각형을 채운 한가지 예이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = [];
  let dp = new Array(251).fill(0);

  input.map( (el) => {
    el = Number(el);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 3;

    for (let i = 3; i <= el; i++) {
      dp[i] = dp[i - 1] + 2 * dp[i - 2];
    }

    answer.push(dp[el]);
  });

  return answer.join("\n");
}

console.log(solution());
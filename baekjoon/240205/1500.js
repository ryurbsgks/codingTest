// 세준이는 정수 S와 K가 주어졌을 때, 합이 S인 K개의 양의 정수를 찾으려고 한다. 만약 여러개일 경우 그 곱을 가능한 최대로 하려고 한다.
// 가능한 최대의 곱을 출력한다.
// 만약 S=10, K=3이면, 3,3,4는 곱이 36으로 최대이다.

const fs = require("fs")
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = 1;
  let [S, K] = [Number(input[0]), Number(input[1])];
  let p = Math.floor(S / K);
  let q = S % K;

  for (let i = 0; i < K; i++) {
    if (q > 0) {
      answer *= p + 1;
      q -= 1;
    } else {
      answer *= p;
    }
  }

  return answer;
}

console.log(solution());
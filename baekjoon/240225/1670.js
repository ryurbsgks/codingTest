// 여러 개의 소국가로 나뉘어져 있었던 A국을 다시 하나의 국가로 합치기 위해 각 소국가의 대표 N명이 원탁에 모였다.
// 각 대표는 미리 원탁의 자리를 배정받았다. 회의를 시작하기 전에 일단 서로 악수를 하려고 한다. 각 대표는 한 사람과만 악수할수 있고, 모든 악수는 동시에 일어난다. 이때, 어떤 사람의 팔도 교차하지 않았을 때 완벽하게 악수했다고 한다.
// N이 주어지면 완벽하게 악수하는 경우의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution() {

  let N = Number(input);
  let arr = new Array(10001).fill(0);
  let MOD = 987654321;
  
  arr[0] = 1;
  arr[2] = 1;

  for (let i = 4; i <= N; i += 2) {
    for (let j = 2; i - j >= 0; j += 2) {
      arr[i] = (arr[i] + (arr[j - 2] * arr[i - j]) % MOD) % MOD;
    }
  }

  return arr[N];
}

console.log(solution());

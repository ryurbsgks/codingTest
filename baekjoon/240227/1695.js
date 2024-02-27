// 앞에서 뒤로 보나, 뒤에서 앞으로 보나 같은 수열을 팰린드롬 이라고 한다. 예를 들어 {1}, {1, 2, 1}, {1, 2, 2, 1}과 같은 수열은 팰린드롬 이지만, {1, 2, 3}, {1, 2, 3, 2} 등은 팰린드롬이 아니다.
// 한 수열이 주어졌을 때, 이 수열에 최소 개수의 수를 끼워 넣어 팰린드롬을 만들려고 한다. 최소 몇 개의 수를 끼워 넣으면 되는지를 알아내는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let arr = input[1].split(" ").map( (el) => Number(el));
  let newArr = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (arr[arr.length - i] === arr[j - 1]) {
        newArr[i][j] = newArr[i - 1][j - 1] + 1;
      } else {
        newArr[i][j] = Math.max(newArr[i][j - 1], newArr[i - 1][j]);
      }
    }
  }

  return N - newArr[N][N];
}

console.log(solution(Number(input[0])));
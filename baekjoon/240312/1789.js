// 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = 0;
  let sum = 0;
  let num = 1;

  while (true) {
    sum += num;
    answer++;

    if (sum > N) {
      answer--;

      break;
    }

    num++;
  }

  return answer;
}

console.log(solution(Number(input)));
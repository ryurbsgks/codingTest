// 양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input[1].split(" ").sort( (a, b) => a - b);

function solution(arr) {

  let answer = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  arr.length >= 2 ? answer = max * min : answer = min * min;

  return answer;
}

console.log(solution(newInput));
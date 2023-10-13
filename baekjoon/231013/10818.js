// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input[1].split(" ").map( (el) => Number(el));

function solution(arr) {
  arr.sort( (a, b) => a - b);

  return `${arr[0]} ${arr[arr.length - 1]}`;
}

console.log(solution(newInput));
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => Number(el));

function solution(arr, idx) {
  arr.sort( (a, b) => a - b);

  return arr[idx];
}

for (let i = 0; i < newInput.length; i++) {
  console.log(solution(newInput, i));
}
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => Number(el));

function solution(arr) {

  let answer = "";

  arr.sort( (a, b) => a - b);

  arr.map( (el) => {
    answer = answer + el + "\n";
  });

  answer = answer.slice(0, answer.length - 1);

  return answer;
}

console.log(solution(newInput));
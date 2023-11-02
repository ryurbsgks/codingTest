// 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("").map( (el) => Number(el));

function solution(arr) {

  let answer = "";

  arr.sort( (a, b) => b - a);

  arr.map( (el) => {
    answer = answer + el;
  });

  return answer;
}

console.log(solution(input));
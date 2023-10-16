// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(str) {

  let arr = str.split("").map( (el) => Number(el));
  let answer = arr.reduce( (acc, cur) => acc + cur, 0);

  return answer;
}

console.log(solution(input[1]));
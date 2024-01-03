// 8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution() {

  let answer = "";

  answer = input[0] === "0" ? "0" : parseInt(input[0], 8).toString(2);

  for (let i = 1; i < input.length; i++) {

    let binaryDigit = parseInt(input[i], 8).toString(2).padStart(3, "0");

    answer += binaryDigit;

  }

  return answer;
}

console.log(solution());
// 2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(str) {

  let answer = [];

  while (str.length % 3 !== 0) {
    str = "0" + str;
  }

  for (let i = 0; i < str.length; i += 3) {

    let num = (Number(str[i]) * 4) + (Number(str[i + 1]) * 2) + Number(str[i + 2]);

    answer.push(num);

  }

  return answer.join("");
}

console.log(solution(input));
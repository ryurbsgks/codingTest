// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = "";
  let arr = [];
  let num = 2;
  
  if (N === 1) {
    return answer;
  }

  while (N >= 2) {
    if (N % num === 0) {
      arr.push(num);
      N = N / num;
    } else {
      num++;
    }
  }

  arr.sort( (a, b) => a - b);

  arr.map( (el) => {
    answer = answer + el + "\n";
  });

  answer = answer.slice(0, answer.length - 1);

  return answer;
}

console.log(solution(Number(input)));
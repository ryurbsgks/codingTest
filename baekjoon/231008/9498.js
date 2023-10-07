// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(num) {
  if (90 <= Number(num) && Number(num) <= 100) {
    return "A";
  } else if (80 <= Number(num) && Number(num) <= 89) {
    return "B";
  } else if (70 <= Number(num) && Number(num) <= 79) {
    return "C";
  } else if (60 <= Number(num) && Number(num) <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(solution(input));
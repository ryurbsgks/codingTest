// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString();

function solution(n) {

  let str = "";

  for (let i = 1; i < 10; i++) {
    str = str + `${n} * ${i} = ${n * i},`;
  }

  str = str.slice(0, str.length - 1);

  return str.replaceAll(",", "\n");
}

console.log(solution(Number(input)));
// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.
// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n").map( (el) => Number(el));

function solution(arr) {

  let answer;
  let str = "";
  let newArr = new Array(30).fill(0);

  arr.map( (el) => {
    newArr[el - 1] = 1;
  });

  newArr.map( (el, idx) => {
    if (el === 0) {
      str = str + (idx + 1) + "\n";
    }
  });

  answer = str.slice(0, str.length - 1);

  return answer;
}

console.log(solution(input));
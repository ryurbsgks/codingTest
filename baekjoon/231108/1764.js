// 김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const arr = input.slice(1, Number(input[0].split(" ")[0]) + 1);
const newArr = input.slice(Number(input[0].split(" ")[0]) + 1, input.length);

function solution(arr, newArr) {

  let answer = [];
  let set = new Set(arr);
  let newSet = new Set(newArr);

  for (let el of set) {
    if (newSet.has(el)) {
      answer.push(el);
    }
  }

  answer.sort();
  answer.unshift(answer.length);

  return answer.join("\n");
}

console.log(solution(arr, newArr));
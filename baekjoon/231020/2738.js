// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const arrA = input.slice(1, Number(input[0].split(" ")[0]) + 1).map( (el) => el.split(" ").map( (element) => Number(element)));
const arrB = input.slice(Number(input[0].split(" ")[0]) + 1, input.length).map( (el) => el.split(" ").map( (element) => Number(element)));

function solution(A, B) {

  let str = "";

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      str += A[i][j] + B[i][j] + " ";
    }
    
    str += "\n";
  }

  return str.slice(0, str.length - 1);
}

console.log(solution(arrA, arrB));
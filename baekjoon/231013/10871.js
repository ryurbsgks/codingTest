// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input[1].split(" ").map( (el) => Number(el));

function solution(arr, n) {
  
  let answer = arr.filter( (el) => el < n);

  return answer.toString().replaceAll(",", " ");
}

console.log(solution(newInput, Number(input[0].split(" ")[1])));
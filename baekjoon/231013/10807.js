// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input[1].split(" ").map( (el) => Number(el));

function solution(arr, n) {

  let newArr = [];

  arr.map( (el) => {
    if (el === n) {
      newArr.push(el);
    }
  });

  return newArr.length;
}

console.log(solution(newInput, Number(input[2])));
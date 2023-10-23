// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).toString().split(" ").map( (el) => Number(el));

function solution(arr) {

  let answer = 0;

  const isPrime = (n) => {
    if (n === 1) {
      return false;
    }

    if (n === 2) {
      return true;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  arr.map( (el) => {
    if (isPrime(el)) {
      answer++;
    }
  });

  return answer;
}

console.log(solution(newInput));
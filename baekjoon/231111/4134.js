// 정수 n(0 ≤ n ≤ 4*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => Number(el));

function solution(arr) {

  let answer = [];

  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  arr.map( (el) => {
    while (!isPrime(el)) {
      el++;
    }

    answer.push(el);
  });

  return answer.join("\n");
}

console.log(solution(newInput));
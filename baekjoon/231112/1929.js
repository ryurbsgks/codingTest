// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

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

  for (let i = arr[0]; i <= arr[1]; i++) {
    if (isPrime(i)) {
      answer.push(i);
    }
  }

  return answer.join("\n");
}

console.log(solution(input.map( (el) => Number(el))));
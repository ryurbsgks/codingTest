// 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.
// 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(M, N) {

  let answer = "";
  let arr = [];

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

  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  if (arr.length) {
    answer = `${arr.reduce( (acc, cur) => acc + cur, 0)}\n${arr[0]}`
  } else {
    answer = -1;
  }

  return answer;
}

console.log(solution(Number(input[0]), Number(input[1])));
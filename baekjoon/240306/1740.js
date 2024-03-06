// 3의 제곱수를 생각하자. 3의 0제곱, 3의 1제곱, 3의 2제곱, ... 은 순서대로 1, 3, 9, 27, ... 이 된다.
// 이를 바탕으로, 한 개 이상의 서로 다른 3의 제곱수의 합으로 표현되는 수를 생각할 수 있다. 예를 들어 30은 27과 3의 합이므로, 이러한 수에 포함된다.
// 한 개 이상의 서로 다른 3의 제곱수의 합으로 표현되는 N번째로 작은 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let result = 0n;
  let n = BigInt(N).toString(2);
  let seq = 1n;

  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === "1") {
      result += seq;
    }

    seq *= 3n;
  }
  
  return result.toString();
}

console.log(solution(input));
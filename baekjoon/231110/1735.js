// 분수 A/B는 분자가 A, 분모가 B인 분수를 의미한다. A와 B는 모두 자연수라고 하자.
// 두 분수의 합 또한 분수로 표현할 수 있다. 두 분수가 주어졌을 때, 그 합을 기약분수의 형태로 구하는 프로그램을 작성하시오. 기약분수란 더 이상 약분되지 않는 분수를 의미한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.map( (el) => el.split(" ").map( (element) => Number(element)));

function solution(arr) {

  let answer = "";

  const euclidean = (a, b, str) => {

    let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);
    let LCM = (a, b) => a * b / GCD(a, b);

    return str === "LCM" ? LCM(a, b) : GCD(a, b);
  };

  let B = euclidean(arr[0][1], arr[1][1], "LCM");
  let A = (B / arr[0][1] * arr[0][0]) + (B / arr[1][1] * arr[1][0]);
  let GCD = euclidean(A, B, "GCD");
  
  answer = `${A / GCD} ${B / GCD}`;

  return answer;
}

console.log(solution(newInput));
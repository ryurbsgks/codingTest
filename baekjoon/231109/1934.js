// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => el.split(" "));

function solution(arr) {

  let answer = [];

  const euclidean = (a, b) => {

    let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);
    let LCM = (a, b) => a * b / GCD(a, b);

    return LCM(a, b);
  };

  arr.map( (el) => {
    answer.push(euclidean(Number(el[0]), Number(el[1])));
  });

  return answer.join("\n");
}

console.log(solution(newInput));
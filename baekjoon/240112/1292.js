// 동호는 내년에 초등학교를 입학한다. 그래서 동호 어머니는 수학 선행 학습을 위해 쉽게 푸는 문제를 동호에게 주었다.
// 이 문제는 다음과 같다. 1을 한 번, 2를 두 번, 3을 세 번, 이런 식으로 1 2 2 3 3 3 4 4 4 4 5 .. 이러한 수열을 만들고 어느 일정한 구간을 주면 그 구간의 합을 구하는 것이다.
// 하지만 동호는 현재 더 어려운 문제를 푸느라 바쁘기에 우리가 동호를 도와주자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let [A, B] = [Number(input[0]), Number(input[1])];
  let arr = [];

  for (let i = 1; i <= B; i++) {
    for (let j = 0; j < i; j++) {
      arr.push(i);
    }
  }

  return arr.slice(A - 1, B).reduce( (acc, cur) => acc + cur, 0);
}

console.log(solution());
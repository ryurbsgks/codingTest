// N과 L이 주어질 때, 합이 N이면서, 길이가 적어도 L인 가장 짧은 연속된 음이 아닌 정수 리스트를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = [];
  let [N, L] = arr.map( (el) => Number(el));

  for (let i = L; i <= 100; i++) {

    let x = N / i - (i + 1) / 2;

    if (Number.isInteger(x)) {
      if (x + 1 >= 0) {
        for (let j = x + 1; j <= x + i; j++) {
          answer.push(j);
        }

        break;
      }
    }

  }

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer.join(" ");
}

console.log(solution(input));
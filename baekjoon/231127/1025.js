// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = 0;

  for (let i = 1; i <= N; i++) {

    let hundred = Math.floor(i / 100);
    let ten = Math.floor((i % 100) / 10);
    let one = i % 10;

    if (i < 100) {
      answer++;
    } else if (i >= 100 && i < 1000) {
      if (hundred - ten === ten - one) {
        answer++;
      }
    }

  }

  return answer;
}

console.log(solution(Number(input)));
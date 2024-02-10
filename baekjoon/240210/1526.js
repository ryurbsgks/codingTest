// 은민이는 4와 7을 좋아하고, 나머지 숫자는 싫어한다. 금민수는 어떤 수가 4와 7로만 이루어진 수를 말한다.
// N이 주어졌을 때, N보다 작거나 같은 금민수 중 가장 큰 것을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = 0;

  for (let i = N; i > 1; i--) {

    let str = String(i);
    let cnt = 0;

    for (let j = 0; j < str.length; j++) {

      let newStr = str[j];
      
      if (newStr === "7" || newStr === "4") {
        cnt++;
      }

    }

    if (cnt === str.length) {
      answer = i;

      break;
    }

  }

  return answer;
}

console.log(solution(Number(input)));
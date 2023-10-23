// 어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.
// 예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.
// n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(n) {

  let answer = "";
  let arr = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  let sum = arr.reduce( (acc, cur) => acc + cur, 0);

  if (sum !== n) {
    answer = `${n} is NOT perfect.`;
  } else {
    answer = `${n} = `;

    arr.map( (el, idx) => {
      if (idx === 0) {
        answer = answer + el;
      } else {
        answer = `${answer} + ${el}`;
      }
    });
  }

  return answer;
}

for (let i = 0; i < input.length - 1; i++) {
  console.log(solution(Number(input[i])));
}